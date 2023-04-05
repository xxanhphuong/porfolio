import type { ReactNode } from "react";

interface BackgroundProps {
  children?: ReactNode;
}

const Background: React.FC<BackgroundProps> = (props: BackgroundProps) => {
  const { children } = props;

  return (
    <div className="background-wrapper fixed h-screen w-full">
      {children}

      {/* <BG className="absolute top-0 left-0 h-full w-full" /> */}
    </div>
  );
};

export default Background;
