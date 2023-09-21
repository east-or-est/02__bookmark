const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
      },
      {
        test: /\.(css)$/,
        use: ["style-loader" ,"css-loader", "postcss-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    port: 3000,
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.json',
      'css',
      'md'
    ],
  },
  target: 'web',
  plugins: [
    new Dotenv()
  ]
};