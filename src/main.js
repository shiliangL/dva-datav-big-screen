/*
 * @Author: shiliangL
 * @Date: 2022-06-20 16:20:54
 * @LastEditTime: 2022-08-16 18:22:10
 * @LastEditors: Do not edit
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import 'normalize.css/normalize.css'

// 使用组件、原型工具函数、插件、等
import lib from '@/plugin/index'
import DatavWindow from '@/plugin/DatavWindow'

Vue.use(lib, { router, store })

window.Vue = Vue
// Vue.use(DatavWindow, { router, store })

Vue.prototype.$DatavWindow = DatavWindow({ router, store })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
