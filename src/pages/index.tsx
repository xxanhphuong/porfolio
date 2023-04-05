/* eslint-disable simple-import-sort/imports */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchTodoRequest } from "@/store/todo/actions";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  ScrollContainer,
  batch,
  Fade,
  FadeIn,
  MoveOut,
  MoveIn,
  Move,
  Sticky,
  Animator,
  ScrollPage,
} from "react-scroll-motion";
import { Meta } from "@/layouts/Meta";
import Image from "next/image";
import IcLi from "@/public/assets/icons/ic-li.svg";
import IcPencelNote from "@/public/assets/images/ic-pencel-note.png";
import IcNote from "@/public/assets/images/note.png";
import StudyImg from "@/public/assets/images/study.png";
import IcIdea from "@/public/assets/images/idea.png";
import IcAuthorDivider from "@/public/assets/images/quote-author.svg";
import IcAuthorRightDivider from "@/public/assets/images/quote-author-right.svg";
import UnlimitedLearningImg from "@/public/assets/images/unlimited-learning.png";
import Pizza4psImage from "@/public/assets/images/4ps.png";
import Project1Img from "@/public/assets/images/project1.png";
import Project2Img from "@/public/assets/images/project2.jpeg";
import VocabularyLookupImg from "@/public/assets/images/vocabulary-lookup.png";
import AvatarImg from "@/public/avatar.jpg";
import { Button } from "antd";
import Link from "next/link";
import { Main } from "@/components/Main";
import NavHeader from "@/components/NavHeader";
import Logo from "@/public/logo.svg";
import { TypeAnimation } from "react-type-animation";
import { useSpring, animated } from "@react-spring/web";
import { Timeline } from "antd";

const Index = () => {
  const [mount, setMount] = useState(false);
  const [contentTabSection2, setContentTabSection2] = useState(1);
  const [{ freq, factor, scale, opacity }] = useSpring(() => ({
    reverse: false,
    from: { factor: 10, opacity: 0, scale: 0.9, freq: "0.0175, 0.0" },
    to: { factor: 150, opacity: 1, scale: 1, freq: "0.0, 0.0" },
    config: { duration: 1500 },
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      setMount(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const onChangeContentSection2 = (tab) => {
    setContentTabSection2(tab);
  };

  const renderContentSection2 = () => {
    switch (contentTabSection2) {
      case 1:
        return (
          <div className="content-section-2" key={contentTabSection2}>
            <h3 className="text-18 text-black-400">
              Engineer <span className="text-primary">@ Upstatement</span>
            </h3>
            <p className="text-14 text-black-500 mt-[0.8rem]">
              May 2018 - Present
            </p>
            <ul className="grid gap-[1.8rem]">
              <li>
                <i className="fal fa-caret-right text-14 text-primary mr-[0.8rem]"></i>
                <span className="text-14 text-black-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti at neque fugit ratione voluptates pariatur, autem
                  eligendi itaque assumenda quod dolores, unde officiis dolorem
                  perferendis iure atque. Ut, vitae maxime?
                </span>
              </li>
              <li>
                <i className="fal fa-caret-right text-14 text-primary mr-[0.8rem]"></i>
                <span className="text-14 text-black-500">
                  Voluptates pariatur, autem eligendi itaque assumenda quod
                  dolores, unde officiis dolorem perferendis iure atque. Ut,
                  vitae maxime?
                </span>
              </li>
              <li>
                <i className="fal fa-caret-right text-14 text-primary mr-[0.8rem]"></i>
                <span className="text-14 text-black-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Possimus id, quo sunt sed neque aliquid voluptate obcaecati?
                  Iste iusto excepturi dolorum. Nulla neque nobis ab, iure
                  libero harum rem consectetur.
                </span>
              </li>
            </ul>
          </div>
        );
        break;
      case 2:
        return (
          <div className="content-section-2" key={contentTabSection2}>
            <h3 className="text-18 text-black-400">
              Engineer <span className="text-primary">@ Upstatement</span>
            </h3>
            <p className="text-14 text-black-500 mt-[0.8rem]">
              May 2018 - Present
            </p>
            <ul className="grid gap-[1.8rem]">
              <li>
                <i className="fal fa-caret-right text-14 text-primary mr-[0.8rem]"></i>
                <span className="text-14 text-black-500">
                  Voluptates pariatur, autem eligendi itaque assumenda quod
                  dolores, unde officiis dolorem perferendis iure atque. Ut,
                  vitae maxime?
                </span>
              </li>
              <li>
                <i className="fal fa-caret-right text-14 text-primary mr-[0.8rem]"></i>
                <span className="text-14 text-black-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Possimus id, quo sunt sed neque aliquid voluptate obcaecati?
                  Iste iusto excepturi dolorum. Nulla neque nobis ab, iure
                  libero harum rem consectetur.
                </span>
              </li>
            </ul>
          </div>
        );
        break;

      default:
        break;
    }
  };

  return !mount ? (
    <>
      <Meta
        title="Phuong Tran Portfolio | FrontEnd Engineer | UI/UX Developer"
        description={`Best English được xây dựng bởi công nghệ trí tuệ nhân tạo AI, giúp người học phát âm như người bản xứ và thuật toán
 "Spaced Repetion - ôn tập ngắt quãng" nhắc người học ôn tập đúng thời điểm vàng, tăng x10 lần khả năng ghi nhớ 10,000 từ vựng dễ dàng và lâu dài hơn.`}
      />
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
    </>
  ) : (
    <Main
      meta={
        <Meta
          title="Phuong Tran Portfolio | FrontEnd Engineer | UI/UX Developer"
          description={`Best English được xây dựng bởi công nghệ trí tuệ nhân tạo AI, giúp người học phát âm như người bản xứ và thuật toán
        "Spaced Repetion - ôn tập ngắt quãng" nhắc người học ôn tập đúng thời điểm vàng, tăng x10 lần khả năng ghi nhớ 10,000 từ vựng dễ dàng và lâu dài hơn.`}
        />
      }
      noContainer
      headerLanding
      id="home"
    >
      <section className="w-3/5 mx-auto flex justify-center flex-col section-1">
        <h4 className=" text-primary mb-[0.4rem]">Hi, my name is</h4>
        <h1 className="text-[3rem] font-bold text-black-400 mb-[0.3rem]">
          Phuong Tran.
        </h1>
        <h4 className="text-[3rem] font-bold text-black-500 mb-[0.4rem]">
          I build things for the web.
        </h4>
        <p className="text-14 text-black-500 leading-[1.6rem] w-2/4 mb-[1.4rem]">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at{" "}
          <span className="effect-hover-link hover:opacity-80">
            <Link href="https://aegona.vn/" className="text-primary">
              Aegona
            </Link>
          </span>
          .
        </p>
        <button className="px-[1.5rem] py-[1rem] border-primary border rounded-4 text-14 text-primary hover:opacity-80 w-fit">
          Check out my resume
        </button>
      </section>
      <section
        className="w-[55%] mx-auto flex pt-[8rem] flex-col section-2 py-[3rem] min-h-[70vh]"
        id="section-1"
      >
        <div className="grid grid-cols-3 gap-[3rem]">
          <div className="col-span-2 mr-[3rem]">
            <h2 className="text-primary title-head">
              0.1 <span className="text-black-400">About Me</span>
            </h2>
            <div className="mt-[2rem] text-14 leading-[1.6rem]">
              <p>
                Hello! My name is Brittany and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2014 when I decided to try Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ducimus minus ea illo iure, animi
                suscipit voluptates vel aliquam saepe magnam excepturi nulla,
                molestiae fuga perspiciatis? Enim fuga obcaecati rerum nam.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
                itaque? Suscipit odit cum sapiente culpa ducimus praesentium
                adipisci fugit quia dolor iste hic placeat excepturi, tenetur
                nesciunt debitis vero quae!
              </p>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
              <ul className="grid grid-cols-2">
                <li>
                  <i className="fal fa-caret-right text-14 text-primary mr-[0.8rem]"></i>
                  <span className="hover:text-primary">HTML/CSS</span>
                </li>
                <li>
                  <i className="fal fa-caret-right text-14 text-primary mr-[0.8rem]"></i>
                  <span className="hover:text-primary">JavaScript (ES6+)</span>
                </li>
                <li>
                  <i className="fal fa-caret-right text-14 text-primary mr-[0.8rem]"></i>
                  <span className="hover:text-primary">TypeScript</span>
                </li>
                <li>
                  <i className="fal fa-caret-right text-14 text-primary mr-[0.8rem]"></i>
                  <span className="hover:text-primary">React</span>
                </li>
                <li>
                  <i className="fal fa-caret-right text-14 text-primary mr-[0.8rem]"></i>
                  <span className="hover:text-primary">Nextjs</span>
                </li>
                <li>
                  <i className="fal fa-caret-right text-14 text-primary mr-[0.8rem]"></i>
                  <span className="hover:text-primary">Node.js (NestJS)</span>
                </li>
                <li>
                  <i className="fal fa-caret-right text-14 text-primary mr-[0.8rem]"></i>
                  <span className="hover:text-primary">Dart (Flutter)</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="avatar-wrapper">
              <div className="bg-img"></div>
              <div className="avatar"></div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-[45%] mx-auto flex pt-[8rem] flex-col section-2 py-[3rem]"
        id="section-2"
      >
        <div className="gap-[3rem] mb-[3rem]">
          <h2 className="text-primary title-head">
            0.2 <span className="text-black-400">My working journey</span>
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-[1rem] divide-x-[1px] divide-[#233554]">
          <div className="custom-timeline">
            <Timeline
              // mode="alternate"
              items={[
                {
                  dot: (
                    <i className="fas fa-graduation-cap text-16 text-black-500"></i>
                  ),
                  children: (
                    <span
                      className="effect-hover-link hover:opacity-80"
                      onClick={() => onChangeContentSection2(1)}
                    >
                      <p
                        style={{
                          color:
                            contentTabSection2 == 1 ? "#64ffda" : "#CCD6F6",
                        }}
                      >
                        Learning
                      </p>
                    </span>
                  ),
                },
                {
                  children: (
                    <span
                      className="effect-hover-link hover:opacity-80"
                      onClick={() => onChangeContentSection2(2)}
                    >
                      <p
                        style={{
                          color:
                            contentTabSection2 == 2 ? "#64ffda" : "#CCD6F6",
                        }}
                      >
                        Top on seek
                      </p>
                    </span>
                  ),
                },
                {
                  children: (
                    <span
                      className="effect-hover-link hover:opacity-80"
                      onClick={() => onChangeContentSection2(3)}
                    >
                      <p
                        style={{
                          color:
                            contentTabSection2 == 3 ? "#64ffda" : "#CCD6F6",
                        }}
                      >
                        Learning
                      </p>
                    </span>
                  ),
                  color: "green",
                },
                {
                  // dot: <ClockCircleOutlined style={{ fontSize: "16px" }} />,
                  children: (
                    <span
                      className="effect-hover-link hover:opacity-80"
                      onClick={() => onChangeContentSection2(4)}
                    >
                      <p style={{ color: "#CCD6F6" }}>Aegona</p>
                    </span>
                  ),
                },
              ]}
            />
          </div>
          <div className="col-span-3 -mt-[8px] pl-[1.7rem]">
            {renderContentSection2()}
          </div>
        </div>
      </section>
      <section
        className="w-[60%] mx-auto flex flex-col section-2 py-[8rem] pt-[12rem]"
        id="section-3"
      >
        <div className="gap-[3rem] mb-[3rem]">
          <h2 className="text-primary title-head">
            0.3 <span className="text-black-400">Some Things I’ve Built</span>
          </h2>
        </div>
        <div className="flex gap-[2rem] grow w-full relative mb-[6rem]">
          <div className="flex items-center wrapper-project-block">
            <div className="wrapper-project-img">
              <Image src={Project1Img} alt="Project1Img"></Image>
            </div>
          </div>
          <div className="text-right w-[40%]">
            <h3 className="text-primary text-14">Featured Project</h3>
            <h2 className="text-black-400 text-18 mb-[1.5rem]">Project 1</h2>
            <div className="description-section-3 text-black-500 text-14  relative right-0 mt-[1.2rem]">
              <div className="text-black-500 px-[2rem] py-[1rem] w-[100%]">
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace, Package
                Control, Atom Package Manager, and npm.
              </div>
              <ul className="flex gap-[1rem] justify-end mt-[1rem]">
                <li className="text-black-500 text-14 hover:text-primary">
                  VS Code
                </li>
                <li className="text-black-500 text-14 hover:text-primary">
                  NextJS
                </li>
                <li className="text-black-500 text-14 hover:text-primary">
                  NestJS
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-[2rem] grow w-full relative">
          <div className="text-left w-[40%]">
            <h3 className="text-primary text-14">Featured Project</h3>
            <h2 className="text-black-400 text-18 mb-[1.5rem]">Project 2</h2>
            <div className="description-section-3 text-black-500 text-14  relative left-0 mt-[1.2rem]">
              <div className="text-black-500 px-[2rem] py-[1rem] w-[100%]">
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace, Package
                Control, Atom Package Manager, and npm.
              </div>
              <ul className="flex gap-[1rem] justify-start mt-[1rem]">
                <li className="text-black-500 text-14 hover:text-primary">
                  VS Code
                </li>
                <li className="text-black-500 text-14 hover:text-primary">
                  NextJS
                </li>
                <li className="text-black-500 text-14 hover:text-primary">
                  NestJS
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center wrapper-project-block justify-end">
            <div className="wrapper-project-img">
              <Image
                src={Project1Img}
                alt="Pizza4psImage"
                className="ml-auto"
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-[35%] mx-auto flex flex-col section-2 pb-[12rem] pt-[6rem]"
        id="section-4"
      >
        <div className="gap-[3rem] mb-[3rem]">
          <h2 className="text-primary text-center">
            0.4 <span className="text-black-400">What’s Next?</span>
          </h2>
          <h1 className="text-center text-[2.5rem] font-bold my-[1.7rem] mb-[1.5rem]">
            Get In Touch
          </h1>
          <p className="text-16 text-black-500 text-center leading-[1.6rem] mb-[3.5rem]">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <button className="mt-[2rem] px-[1.5rem] py-[1rem] border-primary border rounded-4 text-14 text-primary hover:opacity-80 w-fit mx-auto block">
            Say Hello
          </button>
        </div>
      </section>
      <p className="text-14 text-black-500 text-14 hover:text-primary text-center py-[2rem]">
        Designed & Built by Phuong tran
      </p>
    </Main>
  );
};

export default Index;
