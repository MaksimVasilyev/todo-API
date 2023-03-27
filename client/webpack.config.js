const Dotenv = require('dotenv-webpack');

module.exports = {
  // other configuration options...
  plugins: [
    new Dotenv()
  ],
  resolve: {
    fallback: {
      "fs": false,
      "path": false
    }
  }
};