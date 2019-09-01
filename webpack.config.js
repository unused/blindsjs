const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    library: 'blinds',
    libraryTarget: 'window',
    libraryExport: 'default',
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
