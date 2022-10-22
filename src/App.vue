<!--
 * @Author: shiliangL
 * @Date: 2022-06-20 16:20:54
 * @LastEditTime: 2022-08-09 13:56:46
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div id="app">
    <keep-alive :include="keepAlive">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keepAlive: ['AbilitySupermarket', 'AbilitySolution']
    }
  }
}
</script>
