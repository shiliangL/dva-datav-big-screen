/*
 * @Author: shiliangL
 * @Date: 2022-06-20 16:20:54
 * @LastEditTime: 2022-08-18 10:35:20
 * @LastEditors: Do not edit
 * @Description:
 */
const path = require('path')
const { defineConfig } = require('@vue/cli-service')
const resolve = (src) => path.resolve(__dirname, src)
// const defaultConfig = require('./src/config.js')

module.exports = defineConfig({
  runtimeCompiler: true,
  outputDir: 'dist', // 打包生成文件夹
  publicPath: '', // 打包发布路径
  transpileDependencies: true,
  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    // host: '0.0.0.0', // 允许外部ip访问
    // disableHostCheck: true,
    allowedHosts: ['all'],
    port: 8011, // 端口
    proxy: {
      // '/websocket/': {
      //   ws: true,
      //   target: 'ws://192.168.1.200:11901',
      //   changeOrigin: true
      // },
      // '/cim_oauth/': {
      //   target: 'http://192.168.1.188:48799',
      //   changeOrigin: true
      // },
      '/cim/': {
        changeOrigin: true,
        target: 'http://192.168.1.188'
      },
      '/ws/': {
        ws: true,
        changeOrigin: true,
        target: 'ws://192.168.1.188/vy/cim/ws',
        pathRewrite: {
          '^/ws': '/'
        }
      }
    }
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/variables.scss";@import "@/styles/var.scss";'
      }
    }
  },
  configureWebpack: (config) => {

  },
  chainWebpack: (config) => {
    // 别名 alias
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@root', resolve(''))
      // .set('dva-datav', 'D:/develop/make-pre-dev/lib')
  }
})
