const CracoLessPlugin = require('craco-less')
const { dirname } = require('path')
const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [{ plugin: CracoLessPlugin }]
}
