import React from "react";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import Threads from "../Threads";
import RotatingText from "../RotatingText";

const HeroSection: React.FC = () => {
  return (
    <section>
      <div className="absolute top-0 left-0 w-full h-[100vh] opacity-20">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <section className="w-10/12 xl:w-3/5 mx-auto flex justify-center flex-col section-1 relative">
        <div className="slider-thumb"></div>
        <h4 className="text-primary mb-[0.4rem]">Hi, my name is</h4>
        <h1 className="text-[2rem] md:text-[3rem] font-bold text-black-400 mb-[0.3rem]">
          Phuong Tran.
        </h1>
        <h4 className="text-[2rem] md:text-[3rem] font-bold text-black-500 mb-[0.4rem]">
          <div className="flex items-center gap-2 text-[2rem] md:text-[2.5rem]">
            <RotatingText
              texts={[
                "I'm a Fullstack Developer.",
                "I build Travel Platforms.",
                "I build F&B Systems.",
                "I create Digital Experiences."
              ]}
              mainClassName="overflow-hidden "
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.08}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 40, stiffness: 300 }}
              rotationInterval={7500}
            />
          </div>
        </h4>
        <p className="text-14 text-black-500 leading-[1.6rem] w-full md:w-2/4 mb-[1.4rem]">
          I'm a software engineer dedicated to building accessible, human-centered digital experiences that balance elegance, performance, and purpose.
        </p>
        <Link
          className="px-[1.5rem] py-[1rem] border-primary border rounded-4 text-14 text-primary hover:opacity-80 w-fit mt-[1.5rem]"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/anh-ph%C6%B0%C6%A1ng-tran-28b02b159/"
        >
          Check out my resume
        </Link>
        <Parallax translateX={[-20, 10]}>
          <div className="border-[4rem] rounded-[1rem] border-primary w-[50rem] h-[50rem] rotate-45 absolute right-[90%] bottom-[-77rem] opacity-[0.05]"></div>
        </Parallax>
      </section>
    </section>
  );
};

export default HeroSection;
