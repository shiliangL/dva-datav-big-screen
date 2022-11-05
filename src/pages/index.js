/*
 * @Author: shiliangL
 * @Date: 2022-08-09 14:07:47
 * @LastEditTime: 2022-08-10 21:14:56
 * @LastEditors: Do not edit
 * @Description: 演示项目应用场景
 */

const pages = {}
const generatePage = []
// eslint-disable-next-line no-useless-escape
const files = require.context('@/pages', true, /\.vue$/)
files.keys().forEach(key => {
  pages[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
})
Object.keys(pages).forEach(item => {
  generatePage.push({
    component: pages[item],
    name: pages[item].name || item.replace('/index', ''),
    title: pages[item].title || item.replace('/index', ''),
    keyName: item.replace('/index', ''),
    path: pages[item].path ? pages[item].path : `/${item}`,
    description: pages[item].description
  })
})

// const list = generatePage.map(item => item.title)
// console.log(list, '==viewApp 应用演示路由==')

export default generatePage
