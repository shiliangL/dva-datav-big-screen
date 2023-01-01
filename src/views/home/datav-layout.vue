<template>
  <div class="smartDatav">
    <AppHeader></AppHeader>
    <datav-title-bar v-if="0"></datav-title-bar>
    <datav-map-view></datav-map-view>
    <datav-navigation-bar v-if="0"></datav-navigation-bar>
    <AppFooter @select="select"></AppFooter>
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
    select (row) {
      console.log(row)
      switch (row.key) {
        case 1:
          // 设备分布
          this.$DvaWinManager.openWin({
            type: 'left',
            styles: {
            },
            content: () => import('@/asideView/deviceDistributionLeft.vue')
          })
          this.$DvaWinManager.openWin({
            type: 'right',
            styles: {
            },
            content: () => import('@/asideView/deviceDistributionRight.vue')
          })
          break
        case 2:
          // 设备监控
          this.$DvaWinManager.openWin({
            type: 'left',
            styles: {
            },
            content: () => import('@/asideView/deviceMonitoringLeft.vue')
          })
          this.$DvaWinManager.openWin({
            type: 'right',
            styles: {
            },
            content: () => import('@/asideView/deviceMonitoringRight.vue')
          })
          break
        case 3:
          // 设备总览
          this.$DvaWinManager.openWin({
            type: 'left',
            styles: {
            },
            content: () => import('@/asideView/deviceOverviewLeft.vue')
          })
          this.$DvaWinManager.openWin({
            type: 'right',
            styles: {
            },
            content: () => import('@/asideView/deviceOverviewRight.vue')
          })
          break

        default:
          break
      }
    }
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
