// Needed to access firebase (see https://github.com/netlify/netlify-lambda/issues/112)
const nodeExternals = require('webpack-node-externals');

module.exports = {
  externals: [nodeExternals()],
};