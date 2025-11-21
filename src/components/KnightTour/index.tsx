import React, { useState, useRef } from "react";

const KnightTour = () => {
  const [foundMove, setFoundMove] = useState<number[][]>([]);
  const [selectedStart, setSelectedStart] = useState<[number, number] | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [totalAttempts, setTotalAttempts] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(15); // Delay in ms
  const [boardSize, setBoardSize] = useState<number>(5);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [bestTime, setBestTime] = useState<number | null>(null);
  const [bestAttempts, setBestAttempts] = useState<number | null>(null);
  const shouldStopRef = useRef<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  // Knight move offsets
  const KNIGHT_MOVES: number[][] = [
    [-1, -2], [-2, -1], [1, -2], [2, -1],
    [-2, 1], [-1, 2], [1, 2], [2, 1]
  ];

  const sleep = (ms: number): Promise<void> => 
    new Promise((resolve) => setTimeout(resolve, ms));

  const isValidMove = (x: number, y: number, boardSize: number): boolean => {
    return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
  };

  const getPossibleMoves = (
    chessboard: number[][],
    position: [number, number],
    boardSize: number
  ): [number, number][] => {
    const [x, y] = position;
    const moves: [number, number][] = [];

    for (const move of KNIGHT_MOVES) {
      const [dx, dy] = move;
      if (dx === undefined || dy === undefined) continue;
      const newX = x + dx;
      const newY = y + dy;
      if (isValidMove(newX, newY, boardSize) && chessboard[newX]?.[newY] === 0) {
        moves.push([newX, newY]);
      }
    }

    return moves;
  };

  // Warnsdorff's heuristic: prioritize moves with fewer next moves
  const getMoveAccessibility = (
    chessboard: number[][],
    move: [number, number],
    boardSize: number
  ): number => {
    return getPossibleMoves(chessboard, move, boardSize).length;
  };

  const sortMovesByAccessibility = (
    chessboard: number[][],
    moves: [number, number][],
    boardSize: number
  ): [number, number][] => {
    return moves.sort((a, b) => {
      const accessibilityA = getMoveAccessibility(chessboard, a, boardSize);
      const accessibilityB = getMoveAccessibility(chessboard, b, boardSize);
      return accessibilityA - accessibilityB;
    });
  };

  const updateBoard = (move: [number, number], step: number, isBacktrack: boolean = false): void => {
    const [x, y] = move;
    const displayX = x + 1;
    const displayY = y + 1;
    const el = document.getElementById(`${displayX}-${displayY}`);
    
    if (el) {
      if (isBacktrack) {
        el.classList.remove("active");
        el.innerHTML = "";
      } else {
        el.classList.add("active");
        el.innerText = String(step);
      }
    }
  };

  const clearBoard = (boardSize: number): void => {
    for (let i = 1; i <= boardSize; i++) {
      for (let j = 1; j <= boardSize; j++) {
        const el = document.getElementById(`${i}-${j}`);
        if (el) {
          el.classList.remove("active");
          el.innerHTML = "";
        }
      }
    }
  };

  const knightTourAsync = async (
    chessboard: number[][],
    moves: [number, number][],
    boardSize: number,
    delay: number
  ): Promise<boolean> => {
    // Check if stop was requested
    if (shouldStopRef.current) {
      return false;
    }

    // Check if all cells are visited
    if (moves.length === boardSize * boardSize) {
      return true;
    }

    const lastMove = moves[moves.length - 1];
    if (!lastMove) return false;
    
    let possibleMoves = getPossibleMoves(chessboard, lastMove, boardSize);

    // Use Warnsdorff's heuristic to optimize
    possibleMoves = sortMovesByAccessibility(chessboard, possibleMoves, boardSize);

    // Try each possible move
    for (const currentMove of possibleMoves) {
      // Check if stop was requested
      if (shouldStopRef.current) {
        return false;
      }

      const [x, y] = currentMove;
      
      // Validate array bounds
      if (x === undefined || y === undefined || !chessboard[x] || chessboard[x][y] === undefined) {
        continue;
      }
      
      // Increment total attempts counter (trying a move)
      setTotalAttempts((prev) => prev + 1);
      
      // Make the move
      chessboard[x][y] = 1;
      moves.push([x, y]);
      
      // Update visualization
      setCurrentStep(moves.length);
      updateBoard(currentMove, moves.length - 1, false);
      await sleep(delay);

      // Recursively try to complete the tour
      const result = await knightTourAsync(chessboard, moves, boardSize, delay);
      if (result) {
          return true;
        }

      // Check if stop was requested after backtrack
      if (shouldStopRef.current) {
        return false;
      }

      // Increment total attempts counter (backtracking)
      setTotalAttempts((prev) => prev + 1);
      
      // Backtrack: undo the move
        moves.pop();
      if (chessboard[x] && chessboard[x][y] !== undefined) {
        chessboard[x][y] = 0;
      }
      
      // Update visualization for backtracking
      setCurrentStep(moves.length);
      updateBoard(currentMove, moves.length, true);
      await sleep(delay);
    }

    return false;
  };

  const startTimer = (): void => {
    startTimeRef.current = Date.now();
    timerRef.current = setInterval(() => {
      if (!shouldStopRef.current) {
        setElapsedTime(Date.now() - startTimeRef.current);
      }
    }, 100);
  };

  const stopTimer = (): void => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const knightTourF = async (startPosition?: [number, number]): Promise<void> => {
    if (isRunning) return;
    
    setIsRunning(true);
    shouldStopRef.current = false;
    setCurrentStep(0);
    setTotalAttempts(0);
    setElapsedTime(0);
    clearBoard(boardSize);
    startTimer();

    const startPos: [number, number] = startPosition || selectedStart || [0, 0];
    
    // Initialize chessboard
    const chessboard: number[][] = Array(boardSize)
      .fill(null)
      .map(() => Array(boardSize).fill(0));

    // Initialize moves array
    const moves: [number, number][] = [];

    // Place knight at starting position
    const [startX, startY] = startPos;
    if (chessboard[startX] && chessboard[startX][startY] !== undefined) {
      chessboard[startX][startY] = 1;
      moves.push([startX, startY]);
      
      // Visualize first move
      setCurrentStep(1);
      updateBoard(startPos, 0, false);
      await sleep(50);
    }

    // Start the tour
    const solutionWasFound = await knightTourAsync(chessboard, moves, boardSize, speed);
    
    stopTimer();
    const finalTime = elapsedTime;
    
    if (shouldStopRef.current) {
      // User stopped the algorithm
      clearBoard(boardSize);
    } else if (solutionWasFound) {
      setFoundMove([...moves]);
      
      // Update best records
      if (!bestTime || finalTime < bestTime) {
        setBestTime(finalTime);
      }
      if (!bestAttempts || totalAttempts < bestAttempts) {
        setBestAttempts(totalAttempts);
      }
    }
    
    setIsRunning(false);
    shouldStopRef.current = false;
  };

  const handleStop = (): void => {
    if (isRunning) {
      shouldStopRef.current = true;
      stopTimer();
    }
  };

  const formatTime = (ms: number): string => {
    const seconds = Math.floor(ms / 1000);
    const milliseconds = Math.floor((ms % 1000) / 100);
    return `${seconds}.${milliseconds}s`;
  };

  const handleCellClick = (x: number, y: number): void => {
    if (isRunning || x === 0 || y === 0) return;
    
    const boardX = x - 1;
    const boardY = y - 1;
    
    setSelectedStart([boardX, boardY]);
    setFoundMove([]);
    setCurrentStep(0);
    clearBoard(boardSize);
  };

  const handleReset = (): void => {
    if (isRunning) return;
    
    setFoundMove([]);
    setSelectedStart(null);
    setCurrentStep(0);
    setTotalAttempts(0);
    setElapsedTime(0);
    stopTimer();
    clearBoard(boardSize);
  };

  const chessRender = (): JSX.Element[] => {
    const chessSize = boardSize + 1; // +1 for labels
    return [...Array(chessSize)].map((_, x) => {
      return (
        <div className="chess-row" key={x}>
          {[...Array(chessSize)].map((_, y) => {
            const isBorder = x === 0 || y === 0;
            const boardX = x - 1;
            const boardY = y - 1;
            const isSelected = 
              selectedStart !== null && 
              !isBorder &&
              boardX === selectedStart[0] && 
              boardY === selectedStart[1];
            
            return (
              <div
                className={`chess-item ${
                  isBorder ? "chess-w" : ""
                } ${isSelected ? "selected-start" : ""}`}
                id={`${x}-${y}`}
                key={`${x}-${y}`}
                onClick={() => handleCellClick(x, y)}
                style={{
                  cursor: isBorder || isRunning ? "default" : "pointer",
                }}
              >
                {x === 0 ? y : y === 0 ? x : ""}
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <>
      <h2 className="text-center text-[2.5rem] font-bold my-[1.7rem] mb-[2rem]">
        Knight Tour (Just for fun)
      </h2>
      <div className="chess-wrapper mx-auto">{chessRender()}</div>
      <div className="flex flex-col gap-[1rem] justify-center items-center mt-[2rem]">
        {selectedStart && (
          <p className="text-14 text-black-500 text-center">
            Start position: ({selectedStart[0] + 1}, {selectedStart[1] + 1})
            <br />
            <span className="text-12 text-black-500">
              Click on a cell to change start position
            </span>
          </p>
        )}
        {!selectedStart && (
          <p className="text-14 text-black-500 text-center">
            Click on a cell to select start position
          </p>
        )}
        {isRunning && (
          <div className="text-center">
            <p className="text-16 text-primary font-bold">
              Current step: <span className="min-w-[2rem]">{currentStep}</span> / {boardSize * boardSize}
            </p>
            <p className="text-14 text-black-500 mt-1">
              Time: {formatTime(elapsedTime)}
            </p>
          </div>
        )}
        <div className="flex flex-col gap-1 text-center">
          <p className="text-14 text-black-500">
            Total attempts: {totalAttempts}
          </p>
          {!isRunning && totalAttempts > 0 && (
            <p className="text-14 text-black-500">
              Completed in {formatTime(elapsedTime)} | {totalAttempts} attempts
            </p>
          )}
          {(bestTime || bestAttempts) && (
            <div className="text-12 text-primary mt-2">
              <p>🏆 Best: {bestTime && formatTime(bestTime)}</p>
              {bestAttempts && <p>⚡ Fewest attempts: {bestAttempts}</p>}
            </div>
          )}
        </div>
        
        {/* Speed Control */}
        {/* <div className="flex flex-col gap-2 items-center w-full max-w-md">
          <label className="text-14 text-black-500">
            Speed: {speed <= 5 ? "⚡ Fast" : speed <= 15 ? "▶ Normal" : "🐌 Slow"}
          </label>
          <input
            type="range"
            min="1"
            max="50"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            disabled={isRunning}
            className="w-full"
          />
        </div> */}

        {/* Board Size Control */}
        <div className="flex flex-col gap-2 items-center w-full max-w-md">
          <label className="text-14 text-black-500">
            Board Size: {boardSize}x{boardSize}
          </label>
          <div className="flex gap-2">
            {[4, 5, 6].map((size) => (
              <button
                key={size}
                className={`px-3 py-1 border rounded-4 text-12 ${
                  boardSize === size
                    ? "border-primary text-primary bg-primary/10"
                    : "border-black-500 text-black-500 hover:opacity-80"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
                onClick={() => {
                  if (!isRunning) {
                    setBoardSize(size);
                    handleReset();
                  }
                }}
                disabled={isRunning}
              >
                {size}x{size}
              </button>
            ))}
          </div>
        </div>
      <div className="flex gap-[1rem] justify-center items-center">
        <button
            className="px-[1.5rem] py-[1rem] border-primary border rounded-4 text-14 text-primary hover:opacity-80 w-fit disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => knightTourF()}
            disabled={!selectedStart || isRunning}
          >
            {isRunning ? "Running..." : "Go!"}
          </button>
          <button
            className="px-[1.5rem] py-[1rem] border-red-500 border rounded-4 text-14 text-red-500 hover:opacity-80 w-fit disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleStop}
            disabled={!isRunning}
          >
            Stop
        </button>
        <button
            className="px-[1.5rem] py-[1rem] border-primary border rounded-4 text-14 text-primary hover:opacity-80 w-fit disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleReset}
            disabled={isRunning}
        >
            Reset
        </button>
        </div>
      </div>
    </>
  );
};

export default KnightTour;
