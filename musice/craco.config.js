/*
 * @Author: xiewenhao
 * @Date: 2023-07-10 13:19:29
 * @LastEditTime: 2023-07-17 17:16:31
 * @Description: 
 */
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
  plugins: [
    { plugin: CracoLessPlugin },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
