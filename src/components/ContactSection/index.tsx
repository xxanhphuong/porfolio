import React from "react";
import { Parallax } from "react-scroll-parallax";

const ContactSection: React.FC = () => {
  return (
    <Parallax translateY={[0, 50]}>
      <section
        className="w-[80%] md:w-[35%] mx-auto flex flex-col section-2 pb-[12rem] pt-[6rem]"
        id="section-4"
      >
        <div className="gap-[3rem] mb-[3rem]">
          <h2 className="text-primary text-center">
            0.4 <span className="text-black-400">What's Next?</span>
          </h2>
          <h1 className="text-center text-[2.5rem] font-bold my-[1.7rem] mb-[1.5rem]">
            Get In Touch
          </h1>
          <p className="text-16 text-black-500 text-center leading-[1.6rem] mb-[3.5rem]">
            Although I'm currently looking for any new opportunities, my inbox
            is always open. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
          <a
            href="mailto:your-email@example.com"
            className="mt-[2rem] px-[1.5rem] py-[1rem] border-primary border rounded-4 text-14 text-primary hover:opacity-80 w-fit mx-auto block"
          >
            Say Hello
          </a>
        </div>
      </section>
    </Parallax>
  );
};

export default ContactSection;

