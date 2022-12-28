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

import './components/register'

// 使用组件、原型工具函数、插件、等
import lib from '@/plugin/index'
import DvaWinManager from '@/plugin/DvaWinManager'

import dvaDatav2 from 'dva-datav2/index'
Vue.use(dvaDatav2, { router, store })

Vue.use(lib, { router, store })
window.$DvaWinManager = Vue.prototype.$DvaWinManager = new DvaWinManager({ router, store })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
