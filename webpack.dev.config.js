const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // eslint-disable-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require("html-webpack-plugin"); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    index: "index.html",
    port: 8080,
    writeToDisk: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        path.join(process.cwd(), "extra/**/*"),
      ],
    }),
  ],
};
