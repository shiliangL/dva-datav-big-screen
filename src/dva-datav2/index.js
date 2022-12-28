/*
 * @Author: shiliangL
 * @Date: 2022-07-13 19:43:35
 * @LastEditTime: 2022-08-18 10:53:10
 * @LastEditors: Do not edit
 * @Description:
 */
import DvaCount2 from 'dva-datav2/dva-count2'
import DvaCoreChart from 'dva-datav2/dva-core-chart'
import DvaCapsuleBar from 'dva-datav2/dva-capsule-bar'

const components = [
  DvaCount2,
  DvaCoreChart,
  DvaCapsuleBar
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  DvaCount2,
  DvaCoreChart,
  DvaCapsuleBar
}
