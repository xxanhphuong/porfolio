import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { Timeline } from "antd";
import { experiences, ExperienceItem } from "@/constants/experience";

const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const renderExperienceContent = (experience: ExperienceItem) => {
    return (
      <div className="content-section-2" key={experience.id}>
        <h3 className="text-18 text-black-400">
          {experience.title}{" "}
          {experience.company !== "Ho Chi Minh City Open University" && (
            <span className="text-primary">@ {experience.company}</span>
          )}
          {experience.company === "Ho Chi Minh City Open University" && (
            <span className="text-primary"> at {experience.company}</span>
          )}
        </h3>
        <p className="text-14 text-black-500 mt-[0.8rem]">{experience.period}</p>
        {experience.responsibilities.length > 0 && (
          <ul className="grid gap-[1.8rem]">
            {experience.responsibilities.map((resp, index) => (
              <li key={index}>
                <i className="fal fa-caret-right text-14 text-primary mr-[0.8rem]"></i>
                <span className="text-14 text-black-500">{resp}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const activeExperience = experiences.find((exp) => exp.id === activeTab);

  const timelineItems = experiences.map((exp) => ({
    dot: exp.icon ? (
      <i className={`${exp.icon} text-16 text-black-500`}></i>
    ) : undefined,
    children: (
      <span
        className="effect-hover-link hover:opacity-80 cursor-pointer"
        onClick={() => setActiveTab(exp.id)}
      >
        <p
          style={{
            color: activeTab === exp.id ? "#64ffda" : "#CCD6F6",
          }}
        >
          {exp.company}
        </p>
      </span>
    ),
    color: exp.color,
  }));

  return (
    <Parallax translateY={[15, 0]}>
      <section
        className="w-[80%] md:w-[45%] mx-auto flex pt-[8rem] flex-col section-2 py-[3rem]"
        id="section-2"
      >
        <div className="gap-[3rem] mb-[3rem]">
          <h2 className="text-primary title-head">
            0.2 <span className="text-black-400">My working journey</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[1rem] divide-x-[1px] divide-[#233554]">
          <div className="custom-timeline">
            <Timeline items={timelineItems} />
          </div>

          <div className="col-span-3 -mt-[8px] pl-[1.7rem]">
            {activeExperience && renderExperienceContent(activeExperience)}
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default ExperienceSection;

