<script>

import DvaCoreChart from 'dva-datav2/dva-core-chart'
const { echarts } = window

export default {
  name: 'DvaChartBar',
  components: {
    DvaCoreChart
  },
  data () {
    return {
      option: {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          top: '15%',
          left: '5%',
          right: '5%',
          bottom: '15%'
        // containLabel: true
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
          data: ['A', 'B', 'C', 'D', 'E', 'F']
        }],
        yAxis: [{
          type: 'value',
          min: 0,
          // max: 140,
          splitNumber: 4,
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.1)'
            }
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false,
            margin: 20,
            textStyle: {
              color: '#d1e6eb'
            }
          },
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: '注册总量',
          type: 'line',
          smooth: true, // 是否平滑
          showAllSymbol: true,
          // symbol: 'image://./static/images/guang-circle.png',
          symbol: 'circle',
          symbolSize: 15,
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
            borderWidth: 3,
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 0,
            shadowOffsetY: 2,
            shadowOffsetX: 2
          },
          tooltip: {
            show: false
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
          data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02]
        },
        {
          name: '注册总量',
          type: 'line',
          smooth: true, // 是否平滑
          showAllSymbol: true,
          // symbol: 'image://./static/images/guang-circle.png',
          symbol: 'circle',
          symbolSize: 15,
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
            borderWidth: 3,
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 0,
            shadowOffsetY: 2,
            shadowOffsetX: 2
          },
          tooltip: {
            show: false
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
          data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14]
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
