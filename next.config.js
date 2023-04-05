/* eslint-disable import/no-extraneous-dependencies */
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      // disable plugins
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },
};
// module.exports = withBundleAnalyzer({
//   eslint: {
//     dirs: ["."],
//   },
//   poweredByHeader: false,
//   trailingSlash: true,
//   basePath: "",
//   // The starter code load resources from `public` folder with `router.basePath` in React components.
//   // So, the source code is "basePath-ready".
//   // You can remove `basePath` if you don't need it.
//   reactStrictMode: true,
// });
