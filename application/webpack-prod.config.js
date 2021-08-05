const path = require('path');

module.exports = {
  entry: `${__dirname}/client/src/index.jsx`,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`
  }
};
