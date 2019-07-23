export default {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }]
  ]
};
