/* eslint-disable simple-import-sort/imports */
import { useEffect, useState } from "react";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/components/Main";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import KnightTour from "@/components/KnightTour";

const Index = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMount(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return !mount ? (
    <>
      <Meta
        title="Phuong Tran Portfolio | FrontEnd Engineer | UI/UX Developer"
        description={``}
      />
      <LoadingScreen />
    </>
  ) : (
    <Main
      meta={
        <Meta
          title="Phuong Tran Portfolio | FrontEnd Engineer | UI/UX Developer"
          description={``}
        />
      }
      noContainer
      headerLanding
      id="home"
    >
      <div className="">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      <section
        className="w-[80%] md:w-[60%] mx-auto flex flex-col justify-center section-2 py-[8rem] pt-[12rem]"
        id="section-3"
      >
        <KnightTour />
      </section>
      <p className="text-14 text-black-500 hover:text-primary text-center py-[2rem]">
        Designed & Built by Phuong tran
      </p>
    </Main>
  );
};

export default Index;
