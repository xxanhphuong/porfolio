import type { ReactNode } from "react";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import { Button } from "antd";
// eslint-disable-next-line import/no-named-as-default

const FooterMain = () => (
  <footer
    className="flex items-center justify-between px-[3.8rem] py-[1.5rem] fixed bottom-0 left-0 right-0"
    id="nav-header"
  >
    <div className="hidden md:flex flex-col justify-center items-center absolute bottom-0 left-[0.5rem] xl:left-[3.8rem]">
      <ul className="flex flex-col items-center">
        <li>
          <Link href="">
            <i className="fab fa-telegram-plane text-[1.2rem] text-black-500 hover:text-primary hover:relative hover:-translate-y-[3px] transition-all p-[0.8rem]" />
          </Link>
        </li>
        <li>
          <Link href="">
            <i className="fab fa-linkedin-in text-[1.2rem] text-black-500 hover:text-primary hover:relative hover:-translate-y-[3px] transition-all p-[0.8rem]" />
          </Link>
        </li>
        <li>
          <Link href="">
            <i className="fab fa-instagram text-[1.2rem] text-black-500 hover:text-primary hover:relative hover:-translate-y-[3px] transition-all p-[0.8rem]" />
          </Link>
        </li>
        <li>
          <Link href="">
            <i className="fab fa-facebook-f text-[1.2rem] text-black-500 hover:text-primary hover:relative hover:-translate-y-[3px] transition-all p-[0.8rem]" />
          </Link>
        </li>
      </ul>
      <div className="h-[10rem] w-[1px] bg-black-500"></div>
    </div>
    <div className="hidden md:flex flex-col justify-center items-center absolute bottom-0 right-[1rem] xl:right-[3.8rem]">
      <ul className="flex flex-col items-center">
        <li>
          <Link
            href=""
            className="hover:text-primary hover:text-primary hover:relative hover:-translate-y-[3px] transition-all"
          >
            <span
              className=" text-black-500 text-14 hover:text-primary hover:relative hover:-translate-y-[3px] transition-all leading-[1rem]"
              style={{ writingMode: "vertical-rl", letterSpacing: "4px" }}
            >
              aptran17@gmail.com
            </span>
          </Link>
        </li>
      </ul>
      <div className="h-[10rem] w-[1px] bg-black-500"></div>
    </div>
  </footer>
);

export default FooterMain;
