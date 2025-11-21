import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { TypeAnimation } from "react-type-animation";
import Logo from "@/public/logo.svg";

const LoadingScreen: React.FC = () => {
  const [{ scale, opacity }] = useSpring(() => ({
    reverse: false,
    from: { scale: 0.9, opacity: 0 },
    to: { scale: 1, opacity: 1 },
    config: { duration: 1500 },
  }));

  return (
    <section className="min-w-screen h-screen flex items-center justify-center fade-out">
      <animated.div style={{ scale, opacity }} viewBox="0 0 1278 446">
        <Logo className="h-[3rem] w-auto mr-[1rem]" />
      </animated.div>
      <div className="text-black-500 text-18">
        <TypeAnimation
          sequence={["Loading...", 400]}
          wrapper="p"
          cursor={true}
          speed={8}
          repeat={0}
          className="type-animation-custom text-black-500 mb-0"
          style={{
            fontSize: "20px",
            fontWeight: "700",
          }}
        />
      </div>
    </section>
  );
};

export default LoadingScreen;

