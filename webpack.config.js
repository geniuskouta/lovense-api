//webpack.config.js
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "index.js", // <--- Will be compiled to this single file
    libraryTarget: "window"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new Dotenv()
  ]
};
