import React from "react";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { projects } from "@/constants/projects";
import Pizza4psImage from "@/public/assets/images/4ps.png";
import Project1Img from "@/public/assets/images/project1.png";

const ProjectsSection: React.FC = () => {
  const projectImages: Record<number, any> = {
    1: Project1Img,
    2: Project1Img,
  };

  return (
    <Parallax translateY={[0, 20]}>
      <section
        className="w-[80%] md:w-[60%] mx-auto flex flex-col section-2 py-[8rem] pt-[12rem]"
        id="section-3"
      >
        <div className="gap-[3rem] mb-[3rem]">
          <h2 className="text-primary title-head">
            0.3 <span className="text-black-400">Some Things I've Builted</span>
          </h2>
        </div>
        {projects.map((project, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={project.id}
              className={`flex gap-[2rem] grow w-full relative mb-[6rem] flex-col ${
                isEven ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div
                className={`flex items-center wrapper-project-block ${
                  isEven ? "justify-end" : ""
                }`}
              >
                <div className="wrapper-project-img">
                  <Image
                    src={projectImages[project.id]}
                    alt={project.alt}
                    className={isEven ? "ml-auto" : ""}
                  />
                </div>
              </div>
              <div
                className={`w-full md:w-[40%] ${isEven ? "text-left" : "text-right"}`}
              >
                <h3 className="text-primary text-14">Featured Project</h3>
                <h2 className="text-black-400 text-18 mb-[1.5rem]">
                  {project.title}
                </h2>
                <div
                  className={`description-section-3 text-black-500 text-14 relative mt-[1.2rem] ${
                    isEven ? "left-0" : "right-0"
                  }`}
                >
                  <div className="text-black-400 px-[1rem] py-[1rem] w-[100%] text-justify">
                    {project.description}
                  </div>
                  <ul
                    className={`flex gap-[1rem] mt-[1rem] flex-wrap ${
                      isEven ? "justify-start" : "justify-end"
                    }`}
                  >
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="text-black-500 text-14 hover:text-primary"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      <p className="text-black-500 text-14 text-center">
        * Updating Project (Will be updated soon)
      </p>
      </section>
    </Parallax>
  );
};

export default ProjectsSection;

