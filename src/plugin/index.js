/*

 * @Author: shiliangL
 * @Date: 2022-08-16 10:13:00
 * @LastEditTime: 2022-08-19 21:21:03
 * @LastEditors: Do not edit
 * @Description:
 */
// 方便开发调试先祖册全局组件
import { randomNumber, deepMerge } from '@/utils/index'
import directives from '@/directives/styles'
// console.log(dva, '=Dva组件库=')

// 图表工具函数
import { generateDatavLineChartOptionPro, generateDatavBarChartOptionPro, generateDatavRadiusChartOptionPro } from '@/utils/dvaChartOption'

// 封装请求接口可以拦截JSON请求错误 - 这里就默认加载不到就返回 null
function fetchJson (url, opt = {}, isCatch = false) {
  return fetch(url, opt)
    .then(response => {
      if (response.status === 200) {
        return response.json()
      } else {
        const { statusText, ok, status, url } = response
        const result = { statusText, ok, status, url }
        return isCatch ? new Promise((resolve, reject) => reject(result)) : null
      }
    })
}

export default (Vue, { store = {}, router = {} }) => {
  // 组件大设置
  Vue.prototype.$ELEMENT = {
    size: 'small',
    zIndex: 2000
  }
  // 原型工具函数
  Vue.prototype.$randomNumber = randomNumber
  Vue.prototype.$ELEMENT = { size: 'small' }
  // ai-cim 窗口前缀 判断发布是否是相对路径
  Vue.prototype.$PREFIX_URL = window.location.origin + window.location.pathname
  // console.log(Vue.prototype.$PREFIX_URL, '=$PREFIX_URL=')
  // 图表工具函数
  Vue.prototype.$deepMerge = deepMerge
  Vue.prototype.$generateDatavBarChartOptionPro = generateDatavBarChartOptionPro
  Vue.prototype.$generateDatavLineChartOptionPro = generateDatavLineChartOptionPro
  Vue.prototype.$generateDatavRadiusChartOptionPro = generateDatavRadiusChartOptionPro
  // 封装请求接口可以拦截JSON请求错误
  Vue.prototype.$fetchJson = fetchJson
  // 过滤器
  Object.keys(directives).forEach(key => {
    Vue.directive(key, directives[key])
  })
}
