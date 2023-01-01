
<template>
  <div class="datav-aside">
    <div class="datav-aside-item">
      <DvaTitleBar title="设备异常统计" />
      <div class="content">
        <dva-core-chart
          :option="lineOption"
          style="height:180px"
          @ready="lineReady"
        />
      </div>
    </div>
    <div class="datav-aside-item">
      <DvaTitleBar title="设备异常情况" />
      <div class="content">
        <dva-grid-section
          :gap="10"
          :dataList="gridData"
        ></dva-grid-section>
      </div>
    </div>
    <div class="datav-aside-item">
      <DvaTitleBar title="设备异常统计" />
      <div class="content">
        <DvaChartPie
          style="height:180px"
          :showDecorator="false"
          :showDecoratorLine="false"
          :chartData="chartData"
        ></DvaChartPie>
      </div>
    </div>
    <div class="datav-aside-item">
      <DvaTitleBar title="设备产能趋势" />
      <div class="content">
        <dva-core-chart
          style="height:190px"
          :option="lineOption"
        />
      </div>
    </div>
  </div>
</template>

<script>

const { echarts } = window

export default {
  name: 'DeviceProfileRight',
  desc: '设备监控右边面板',
  data () {
    return {
      gridData: [
        { text: '今日报警总数', num: 350, unit: '项', icon: 'icon-xiaoxi' },
        { text: '本月报警总数', num: 4220, unit: '项', icon: 'icon-tubiao-bingtu' },
        { text: '已处理异常数', num: 1820, unit: '项', icon: 'icon-gongdanqueren' },
        { text: '待处理异常数', num: 230, unit: '项', icon: 'icon-renwujincheng' }
      ],
      chartData: [
        { name: '温度异常', value: 1612, unit: '项' },
        { name: '噪音警告', value: 1116, unit: '项' },
        { name: '气味报警', value: 912, unit: '项' },
        { name: '远程异常', value: 526, unit: '项' },
        { name: '其他报警', value: 328, unit: '项' }
      ],
      lineOption: {
        backgroundColor: 'transparent',
        grid: {
          top: '4%',
          left: '2%',
          right: '2%',
          bottom: '2%',
          containLabel: true
        },
        legend: {
          top: 0,
          right: 10,
          show: false,
          icon: 'stack',
          textStyle: {
            color: '#fff'
          },
          itemWidth: 10,
          itemHeight: 10,
          data: ['注册总量', '安装总量']
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              show: true,
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#f9f9f9'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#d1e6eb'
            }
          },
          axisTick: {
            show: false
          },
          data: new Array(12).fill(0).map((value, index) => (index + 1 + '月'))
        }],
        yAxis: [{
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0a3256'
            }
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#d1e6eb'
            }
          },
          axisTick: {
            show: false
          }
        }],
        series: [
          {
            name: '订单量',
            type: 'line',
            symbolSize: 10,
            symbol: 'circle',
            smooth: true,
            showAllSymbol: true,
            lineStyle: {
              normal: {
                color: '#00b3f4',
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5
              }
            },
            label: {
              show: false,
              position: 'top',
              fontSize: 14,
              textStyle: {
                color: '#00b3f4'
              }
            },
            itemStyle: {
              color: '#00b3f4',
              borderColor: '#fff',
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, .3)',
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(0,179,244,0.3)'
                },
                {
                  offset: 1,
                  color: 'rgba(0,179,244,0)'
                }
                ], false),
                shadowColor: 'rgba(0,179,244, 0.9)',
                shadowBlur: 20
              }
            },
            data: [2136, 3693, 2962, 3810, 3519, 3484, 3915, 3823, 3455, 4310, 4019, 4100]
          }
        ]
      }
    }
  },
  beforeDestroy () {
    clearInterval(this._setInterval)
  },
  methods: {
    lineReady (chart) {
      let len = 0
      clearInterval(this._setInterval)
      this._setInterval = setInterval(() => {
        if (len === 12) len = 0
        chart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: len
        })
        len++
      }, 3200)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
