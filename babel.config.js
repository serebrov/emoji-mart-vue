const presets = [
  [
    "@babel/env",
    {
      targets: {
        "browsers": ["last 3 versions", "IE >= 11", "iOS >= 9"],
        // "chrome": "1"
      },
      useBuiltIns: "usage",
      corejs: 3
    },
  ],
];

const plugins = ["@babel/plugin-transform-runtime"];

const sourceType = "unambiguous";

module.exports = { presets, plugins, sourceType };
