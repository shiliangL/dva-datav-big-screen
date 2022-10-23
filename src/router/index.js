
/*
 * @Author: shiliangL
 * @Date: 2022-06-20 16:20:54
 * @LastEditTime: 2022-08-19 19:42:45
 * @LastEditors: Do not edit
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    description: '项目主页',
    component: () => import('@/views/home/datav-layout')
  }
]

const router = new VueRouter({
  routes
})

export default router
