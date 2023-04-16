import { Footer } from "antd/es/layout/layout";
import type { ReactNode } from "react";
import FooterMain from "../FooterMain";
import dynamic from "next/dynamic";

// eslint-disable-next-line import/no-named-as-default

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  noContainer?: boolean;
  id?: string;
  headerLanding?: boolean;
};

const NavHeader = dynamic(() => import("../NavHeader"), {
  ssr: false,
});

const Main = (props: IMainProps) => (
  <div className="text-black-400" id={props?.id}>
    {props.meta}

    <div className="intro"></div>
    <div className={`mx-auto ${!props?.noContainer && "container"} `}>
      <NavHeader />
      <main className="content text-xl overflow-hidden mx-auto flex justify-center flex-col section-1 relative">
        {props.children}
      </main>
      <FooterMain />
    </div>
  </div>
);

export { Main };
