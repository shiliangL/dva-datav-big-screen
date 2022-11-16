<template>
  <div class="smartDatav">
    <datav-title-bar></datav-title-bar>
    <datav-map-view></datav-map-view>
    <datav-navigation-bar v-if="0"></datav-navigation-bar>
    <AppFooter></AppFooter>
  </div>
</template>

<script>

export default {
  name: 'SmartDatav',
  components: {
    datavMapView: () => import('./datav-map-view.vue'),
    datavTitleBar: () => import('./datav-title-bar.vue'),
    datavNavigationBar: () => import('./datav-navigation-bar.vue')
  },
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
$themeColor: #007aff;
.smartDatav {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fff;
  position: relative;
}
</style>
