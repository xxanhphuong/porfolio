import React, { Component, useEffect, useRef, useState } from "react";

const KnightTour = () => {
  const [foundMove, setFoundMove] = useState([]);

  const getPossibleMoves = (chessboard, position) => {
    // Generate all knight moves (even those that go beyond the board).
    const possibleMoves = [
      [position[0] - 1, position[1] - 2],
      [position[0] - 2, position[1] - 1],
      [position[0] + 1, position[1] - 2],
      [position[0] + 2, position[1] - 1],
      [position[0] - 2, position[1] + 1],
      [position[0] - 1, position[1] + 2],
      [position[0] + 1, position[1] + 2],
      [position[0] + 2, position[1] + 1],
    ];

    // Filter out all moves that go beyond the board.
    return possibleMoves.filter((move) => {
      const boardSize = chessboard.length;
      return (
        move[0] >= 0 &&
        move[1] >= 0 &&
        move[0] < boardSize &&
        move[1] < boardSize
      );
    });
  };

  const isMoveAllowed = (chessboard, move) => {
    return chessboard[move[0]][move[1]] !== 1;
  };

  const isBoardCompletelyVisited = (chessboard, moves) => {
    const totalPossibleMovesCount = chessboard.length ** 2;
    const existingMovesCount = moves.length;

    return totalPossibleMovesCount === existingMovesCount;
  };

  const knightTour = (chessboard, moves) => {
    const currentChessboard = chessboard;

    // If board has been completely visited then we've found a solution.
    if (isBoardCompletelyVisited(currentChessboard, moves)) {
      return true;
    }

    // Get next possible knight moves.
    const lastMove = moves[moves.length - 1];
    const possibleMoves = getPossibleMoves(currentChessboard, lastMove);

    // Try to do next possible moves.
    for (let moveIndex = 0; moveIndex < possibleMoves.length; moveIndex += 1) {
      const currentMove = possibleMoves[moveIndex];

      // Check if current move is allowed. We aren't allowed to go to
      // the same cells twice.
      if (isMoveAllowed(currentChessboard, currentMove)) {
        // Actually do the move.
        moves.push(currentMove);
        currentChessboard[currentMove[0]][currentMove[1]] = 1;

        // If further moves starting from current are successful then
        // return true meaning the solution is found.
        if (knightTour(currentChessboard, moves)) {
          return true;
        }

        // BACKTRACKING.
        // If current move was unsuccessful then step back and try to do another move.
        moves.pop();
        currentChessboard[currentMove[0]][currentMove[1]] = 0;
      }
    }

    // Return false if we haven't found solution.
    return false;
  };

  const knightTourF = (chessboardSize) => {
    // Init chessboard.
    const chessboard = Array(chessboardSize)
      .fill(null)
      .map(() => Array(chessboardSize).fill(0));

    // Init moves array.
    const moves = [];

    // Do first move and place the knight to the 0x0 cell.
    const firstMove = [0, 0];
    moves.push(firstMove);
    chessboard[firstMove[0]][firstMove[0]] = 1;

    const solutionWasFound = knightTour(chessboard, moves);
    if (solutionWasFound) {
      setFoundMove(moves);
    }
    return solutionWasFound ? moves : [];
  };

  useEffect(() => {
    const timeoutIds = [];
    foundMove.length > 0 &&
      foundMove.map((item, index) => {
        const timeoutId = setTimeout(() => {
          let el = document.getElementById(`${item[0] + 1}-${item[1] + 1}`);
          if (el) {
            el.innerHTML = "";
            el.classList.add("active");
            el.innerText += index;
          }
        }, 200 * index);
        timeoutIds.push(timeoutId);
      });

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [foundMove]);

  const chessRender = (chessSize) => {
    return [...Array(chessSize)].map((item, x) => {
      return (
        <div className="chess-row" key={x}>
          {[...Array(chessSize)].map((item, y) => {
            return (
              <div
                className={`chess-item ${x == 0 || y == 0 ? "chess-w" : ""}`}
                id={`${x}-${y}`}
                key={`${x}-${y}`}
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
        Knight Tour
      </h2>
      <div className="chess-wrapper mx-auto">{chessRender(6)}</div>
      <div className="flex gap-[1rem] justify-center items-center">
        <button
          className="mt-[2rem] px-[1.5rem] py-[1rem] border-primary border rounded-4 text-14 text-primary hover:opacity-80 w-fit"
          onClick={() => knightTourF(5)}
        >
          Go!
        </button>
        <button
          className="mt-[2rem] px-[1.5rem] py-[1rem] border-primary border rounded-4 text-14 text-primary hover:opacity-80 w-fit"
          onClick={() => setFoundMove([])}
        >
          reset
        </button>
      </div>
    </>
  );
};

// extended main view with translate hoc
export default KnightTour;
