/*
 * @Author: shiliangL
 * @Date: 2021-11-21 08:58:40
 * @LastEditTime: 2022-08-03 13:38:34
 * @LastEditors: Do not edit
 * @Description: 根据组件name或者文件夹生成全局组件
 */
import Vue from 'vue'
function changeStr (str) {
  return (str.charAt(0).toUpperCase() + str.slice(1)).split('/')[0]
}
// eslint-disable-next-line no-useless-escape
const requireComponent = require.context('@/components', true, /\index.vue$/)
requireComponent.keys().forEach((element) => {
  const config = requireComponent(element)
  const componentName = changeStr(
    element.replace(/^.\//, '').replace(/.\w+$/, '')
  )
  Vue.component(config.default.name || componentName, config.default || config)
})
