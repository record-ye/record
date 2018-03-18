module.exports = require('./webpack.config-helper')({
  isProduction: false,
  devtool: 'cheap-eval-source-map',
  port: 1337,
  host: '0.0.0.0'
});