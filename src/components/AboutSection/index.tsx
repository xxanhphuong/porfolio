import React from "react";
import { Parallax } from "react-scroll-parallax";

const technologies = [
  "HTML/CSS",
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Nextjs",
  "SvelteJS",
  "Node.js (NestJS)",
  "Basic of Dart (Flutter)",
];

const AboutSection: React.FC = () => {
  return (
    <section
      className="w-[80%] md:w-[55%] mx-auto flex pt-[8rem] flex-col section-2 py-[3rem] min-h-[70vh]"
      id="section-1"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-[3rem]">
        <div className="col-span-2 mr-0 md:mr-[3rem] order-2 md:order-1">
          <h2 className="text-primary title-head">
            0.1 <span className="text-black-400">About Me</span>
          </h2>
          <Parallax translateX={[-5, 5]} opacity={[0.5, 1]}>
            <div className="mt-[2rem] text-14 leading-[1.6rem]">
              <p>
                Hello! My name is Phuong Tran and I enjoy creating things that
                live on the internet. My interest in web development started
                back in 2014. I have the experience of working on front-end
                development. However, i would like to be not only in Front-end
                but also in Full stack Development In addition, i am active and
                enthusiastic. I am willing to learn and do what takes to get a
                job done well even under pressure.
              </p>
              <p>
                To me a chance to discover valuable knowledge in the real world
                and hope to have more work experience in the field of love and
                will create useful contacts. I really look forward to learning
                more about more thing and can assure you that my drive,
                commitment and enthusiasm will be a great value to your team.
              </p>

              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2">
                {technologies.map((tech) => (
                  <li key={tech}>
                    <i className="fal fa-caret-right text-14 text-primary mr-[0.8rem]"></i>
                    <span className="hover:text-primary">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Parallax>
        </div>
        <div className="order-1 md:order-2 mb-[7rem] md:mb-0">
          <Parallax translateX={[10, 0]} opacity={[0.5, 1]}>
            <div className="avatar-wrapper">
              <div className="bg-img"></div>
              <div className="avatar"></div>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

