// eslint-disable-next-line import/no-extraneous-dependencies
import "../styles/global.css";
import "antd/dist/reset.css";
import "../styles/app.scss";
import "react-spring-bottom-sheet/dist/style.css";

// eslint-disable-next-line import/no-extraneous-dependencies
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import store from "@/store";

import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "64FFDA",
        colorFillSecondary: "0B192F",
      },
    }}
  >
    <StyleProvider hashPriority="high">
      <Provider store={store}>
        <Component {...pageProps} />
        <AnimatedCursor
          innerSize={12}
          outerSize={8}
          color="214, 38, 179"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      </Provider>
    </StyleProvider>
  </ConfigProvider>
);

export default MyApp;
