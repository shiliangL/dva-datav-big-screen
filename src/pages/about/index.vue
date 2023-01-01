<template>
  <div class="page">
    关于其他

    DvaTitleBar
    <div class="box">
      <DvaTitleBar title="设备增长趋势" />
    </div>

    <dva-progress-list />

    <div class="box">
      <DvaGridSection />
    </div>
    <div class="box">
      <DvaChartPie />
    </div>
    <div class="box">
      <DvaChartLine />
    </div>

  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style lang="scss" scoped>
.box{
  width: 360px;
  height: 180px;
}
</style>
