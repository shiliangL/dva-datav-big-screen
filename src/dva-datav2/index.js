/*
 * @Author: shiliangL
 * @Date: 2022-07-13 19:43:35
 * @LastEditTime: 2022-08-18 10:53:10
 * @LastEditors: Do not edit
 * @Description:
 */
import DvaCount2 from 'dva-datav2/dva-count2'
import DvaGridPanel from 'dva-datav2/dva-grid-panel'
import DvaCoreChart from 'dva-datav2/dva-core-chart'
import DvaCapsuleBar from 'dva-datav2/dva-capsule-bar'
import DvaGridSection from 'dva-datav2/dva-grid-section'
import DvaProgressList from 'dva-datav2/dva-progress-list'

const components = [
  DvaCount2,
  DvaCoreChart,
  DvaCapsuleBar,
  DvaProgressList,
  DvaGridSection,
  DvaGridPanel
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
  DvaCapsuleBar,
  DvaProgressList,
  DvaGridSection,
  DvaGridPanel
}
