const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  externals: [
    "react",
    "react-dom",
    "styled-components"
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
