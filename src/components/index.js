/*
 * @Author: shiliangL
 * @Date: 2021-11-21 08:58:40
 * @LastEditTime: 2022-08-03 13:38:34
 * @LastEditors: Do not edit
 * @Description: 根据组件name 生成名称
 */
const components = []
const mapList = {}
// eslint-disable-next-line no-useless-escape
const files = require.context('@/components', true, /\index.vue$/)
files.keys().forEach(key => {
  mapList[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
})
Object.keys(mapList).forEach(item => {
  components.push({
    component: mapList[item],
    name: mapList[item].name
  })
})

export default {
  install (Vue) {
    components.forEach(item => {
      Vue.component(item.name, item.component)
    })
  }
}
