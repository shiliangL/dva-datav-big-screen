
<template>
  <div class="datav-aside">
    <div class="datav-aside-item">
      <DvaTitleBar title="设备工单情况" />
      <div class="content">
        <dva-grid-section
          :gap="10"
          :dataList="gridData"
        ></dva-grid-section>
      </div>
    </div>
    <div class="datav-aside-item">
      <DvaTitleBar title="设备订单统计" />
      <div class="content">
        <dva-progress-list
          isTop
          :dataList="progressData"
        ></dva-progress-list>
      </div>
    </div>
    <div class="datav-aside-item">
      <DvaTitleBar title="设备类型统计" />
      <div class="content">
        <dva-capsule-bar
          class="capsule-bar-title"
          :config="item"
          v-for="(item,index) in capsuleList"
          :key="index"
        ></dva-capsule-bar>
        <DvaChartPie
          style="height:180px"
          :showDecorator="false"
          :showDecoratorLine="false"
          class="dva-chart-box"
          :chartData="chartData"
        ></DvaChartPie>
      </div>
    </div>
  </div>
</template>

<script>

// const { echarts } = window
export default {
  name: 'DeviceDistributionRight',
  desc: '设备分布右边面板',
  data () {
    return {
      gridData: [
        { text: '客户订单', num: 2350, unit: '单', icon: 'icon-xiangmu' },
        { text: '预约安装', num: 1220, unit: '单', icon: 'icon-ditu1' },
        { text: '续租/续约', num: 1820, unit: '单', icon: 'icon-calendar' },
        { text: '客户跟进', num: 5230, unit: '单', icon: 'icon-fenxi' }
        // { text: '客户关怀', num: 820, unit: '单', icon: 'icon-dangjian_shehuifuwu' },
        // { text: '意向客户', num: 230, unit: '单', icon: 'icon-icon_home_donation' }
      ],
      progressData: [
        { icon: 'icon-ditu2 iconfont dva-icon', name: '广东', value: 6320, unit: '单' },
        { icon: 'icon-ditu2 iconfont dva-icon', name: '上海', value: 4232, unit: '单' },
        { icon: 'icon-ditu2 iconfont dva-icon', name: '山东', value: 2422, unit: '单' },
        { icon: 'icon-ditu2 iconfont dva-icon', name: '浙江', value: 3610, unit: '单' },
        { icon: 'icon-ditu2 iconfont dva-icon', name: '云南', value: 4620, unit: '单' },
        { icon: 'icon-ditu2 iconfont dva-icon', name: '江苏', value: 3160, unit: '单' },
        { icon: 'icon-ditu2 iconfont dva-icon', name: '北京', value: 1160, unit: '单' }
      ],
      capsuleList: [
        {
          title: '设备总数',
          unit: '个',
          list: [{
            title: '联网设备',
            value: 6340,
            unit: '个',
            color: 'linear-gradient(-90deg, #5071FF, #21CDFF)'
          },
          {
            title: '普通设备',
            value: 2282,
            unit: '个',
            color: 'linear-gradient(-90deg, #00fcae, #006388)'
          }
          ]
        }
      ],
      chartData: [
        { name: '物联设备', value: 8612 },
        { name: '烟感设备', value: 4216 },
        { name: '温控设备', value: 3123 },
        { name: '远程设备', value: 2226 },
        { name: '其他设备', value: 2088 }
      ]
    }
  },
  mounted () {

  },
  beforeDestroy () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.capsule-bar-title {
  margin-bottom: 18px;
}
</style>
