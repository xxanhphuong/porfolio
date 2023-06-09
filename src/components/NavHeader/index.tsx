import React, { ReactNode, useCallback, useEffect, useState } from "react";

import Logo from "@/public/logo.svg";
import Link from "next/link";
import { Button } from "antd";
// eslint-disable-next-line import/no-named-as-default

// type INavHeaderProps = {};

const NavHeader = () => {
  const [y, setY] = useState(window.scrollY);
  const [isSticky, setIsSticky] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setIsSticky(true);
      } else if (y < window.scrollY) {
        setIsSticky(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const toggleNavMobile = () => {
    setIsActive(!isActive);
  };

  const scroll = (section: any) => {
    window.scrollTo({
      top: section.offsetTop,
      left: 0,
      behavior: "smooth",
    });
    setIsActive(false);
  };
  return (
    <div
      className={`nav-header ${
        isSticky && y != 0
          ? "sticky-header py-[0.5rem] md:py-0"
          : y != 0
          ? "unset-sticky-header"
          : ""
      }`}
      id="nav-header"
    >
      <div className="flex items-center justify-between px-[2rem] md:px-[3rem] py-[1rem]">
        <Logo className="h-[3rem] w-auto logo" />
        <button className="block md:hidden" onClick={toggleNavMobile}>
          <i className="fas fa-bars text-[1.5rem] text-primary"></i>
        </button>
        <ul
          className={`h-full items-center gap-[1.5rem] mb-0 nav md:flex fixed-nav-mobile pt-[3rem] md:pt-0 ${
            isActive && "active"
          }`}
        >
          <button
            className="block md:hidden absolute right-[1rem] top-[1rem]"
            onClick={toggleNavMobile}
          >
            <i class="far fa-times-circle text-primary text-[1.5rem]"></i>
          </button>
          <li className="inline-block hover:text-primary hover:relative hover:-translate-y-[4px] transition-all p-[1rem]">
            <span
              className="text-14 hover:text-primary"
              onClick={() => scroll(document.querySelector("#section-1"))}
            >
              <span className="text-primary mr-2 hover:text-primary">01.</span>
              <span className="text-white mr-2 hover:text-primary">About</span>
            </span>
          </li>
          <li className="inline-block hover:text-primary hover:relative hover:-translate-y-[4px] transition-all p-[1rem]">
            <span
              onClick={() => scroll(document.querySelector("#section-2"))}
              className="text-14 hover:text-primary"
            >
              <span className="text-primary mr-2 hover:text-primary">02.</span>
              <span className="text-white mr-2 hover:text-primary">
                Experience
              </span>
            </span>
          </li>
          <li className="inline-block hover:text-primary hover:relative hover:-translate-y-[4px] transition-all p-[1rem]">
            <Link href="" className="text-14 hover:text-primary">
              <span className="text-primary mr-2 hover:text-primary">03.</span>
              <span className="text-white mr-2 hover:text-primary">Work</span>
            </Link>
          </li>
          <li className="inline-block hover:text-primary hover:relative hover:-translate-y-[4px] transition-all p-[1rem]">
            <Link href="" className="text-14 hover:text-primary">
              <span className="text-primary mr-2 hover:text-primary">04.</span>
              <span className="text-white mr-2 hover:text-primary">
                Contact
              </span>
            </Link>
          </li>
          <li className="inline-block hover:text-primary hover:relative hover:-translate-y-[3px] transition-all p-[1rem]">
            <button className="px-[1.5rem] py-2 border-primary border rounded-4 text-14 text-primary hover:opacity-80 hover:shadow-2xl">
              Resume
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavHeader;
