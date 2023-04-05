import { Footer } from "antd/es/layout/layout";
import type { ReactNode } from "react";
import NavHeader from "../NavHeader";
import FooterMain from "../FooterMain";

// eslint-disable-next-line import/no-named-as-default

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  noContainer?: boolean;
  id?: string;
  headerLanding?: boolean;
};

const Main = (props: IMainProps) => (
  <div className="text-black-400" id={props?.id}>
    {props.meta}

    <div className="intro"></div>
    <div className="flex text-center md:hidden h-screen items-center justify-center">
      Not Support Yet !!!
    </div>
    <div
      className={`mx-auto ${
        !props?.noContainer && "container"
      } hidden md:block`}
    >
      <NavHeader />
      <main className="content text-xl">{props.children}</main>
      <FooterMain />
    </div>
  </div>
);

export { Main };