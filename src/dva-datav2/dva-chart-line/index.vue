<script>

import DvaCoreChart from 'dva-datav2/dva-core-chart'
const { echarts } = window

export default {
  name: 'DvaChartLine',
  props: {

  },
  components: {
    DvaCoreChart
  },
  data () {
    return {
      option: {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          top: 0,
          right: 10,
          show: true,
          icon: 'stack',
          textStyle: {
            color: '#fff'
          },
          itemWidth: 10,
          itemHeight: 10,
          data: ['注册总量', '安装总量']
        },
        grid: {
          top: '10%',
          left: '5%',
          right: '5%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          axisLine: {
            show: true
          },
          axisLabel: {
            color: '#fff'
          },
          splitLine: {
            show: false
          },
          boundaryGap: false,
          data: new Array(6).fill(0).map((value, index) => (2018 + index))
        }],
        yAxis: [{
          type: 'value',
          splitNumber: 4,
          splitLine: {
            show: false,
            lineStyle: {
              color: 'rgba(255,255,255,0.1)'
            }
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false,
            // margin: 20,
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
            name: '注册总量',
            type: 'line',
            smooth: true, // 是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 12,
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
              show: true,
              position: 'top',
              textStyle: {
                color: '#00b3f4'
              }
            },
            itemStyle: {
              color: '#00b3f4',
              borderColor: '#fff',
              borderWidth: 2,
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
            data: [102.84, 205.97, 332.79, 381.55, 398.35, 414.02]
          },
          {
            name: '安装总量',
            type: 'line',
            smooth: true, // 是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 12,
            lineStyle: {
              normal: {
                color: '#00ca95',
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5
              }
            },
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#00ca95'
              }
            },
            itemStyle: {
              color: '#00ca95',
              borderColor: '#fff',
              borderWidth: 2,
              shadowColor: 'rgba(0, 0, 0, .3)',
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(0,202,149,0.3)'
                },
                {
                  offset: 1,
                  color: 'rgba(0,202,149,0)'
                }
                ], false),
                shadowColor: 'rgba(0,202,149, 0.9)',
                shadowBlur: 20
              }
            },
            data: [281.55, 398.35, 414.02, 479.55, 589.57, 626.14]
          }
        ]
      }
    }
  },
  mounted () {

  },
  methods: {

  },
  render (h) {
    return h('dva-core-chart', {
      props: {
        option: this.option
      }
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
