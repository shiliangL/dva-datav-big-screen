
<template>
  <div class="datav-aside">
    <div class="datav-aside-item">
      <DvaTitleBar title="设备异常统计" />
      <div class="content">
        <dva-core-chart
          :option="lineOption1"
          style="height:180px"
          @ready="lineReady1"
        />
      </div>
    </div>
    <div class="datav-aside-item">
      <DvaTitleBar title="设备异常分类" />
      <div class="content">
        <DvaChartPie
          isUnit
          style="height:180px"
          :showDecorator="true"
          :showDecoratorLine="true"
          :chartData="chartData"
        ></DvaChartPie>
      </div>
    </div>
    <div class="datav-aside-item">
      <DvaTitleBar title="设备异常推送" />
      <div class="content">
        <dva-swiper
          :data="swiperList"
          :config="configSwiper"
          class="mock_table_list"
          :height="110"
        >
          <dva-grid-panel
            slot="header"
            class="mock_table_header"
            :gap="0"
            :column="4"
          >
            <div class="grid-columns-item"> 设备型号 </div>
            <div class="grid-columns-item"> 故障地址 </div>
            <div class="grid-columns-item"> 异常类型 </div>
            <div class="grid-columns-item"> 处理状态 </div>
          </dva-grid-panel>
          <dva-grid-panel
            :class="index % 2 ===0 ?'stripe_bar1':'stripe_bar2'"
            slot-scope="{ item, index }"
            :gap="0"
            :column="4"
          >
            <div class="grid-columns-item"> {{ item.name }} </div>
            <div class="grid-columns-item"> {{ item.location }} </div>
            <div class="grid-columns-item"> {{ item.abnormal }} </div>
            <div class="grid-columns-item"> {{ item.status }} </div>
          </dva-grid-panel>
        </dva-swiper>
      </div>
    </div>
    <div class="datav-aside-item">
      <DvaTitleBar title="设备告警统计" />
      <div class="content">
        <dva-core-chart
          style="height:190px"
          :option="lineOption2"
          @ready="lineReady2"
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
        { name: '设备异常1', value: 1882, unit: '项' },
        { name: '设备异常2', value: 1662, unit: '项' },
        { name: '设备异常3', value: 1612, unit: '项' },
        { name: '设备异常4', value: 1526, unit: '项' },
        { name: '设备异常5', value: 1328, unit: '项' }
      ],
      lineOption1: {
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
            name: '设备异常统计',
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
      },
      lineOption2: {
        backgroundColor: 'transparent',
        grid: {
          top: '16%',
          left: '2%',
          right: '2%',
          bottom: '2%',
          containLabel: true
        },
        legend: {
          top: 0,
          right: 10,
          // show: false,
          icon: 'stack',
          textStyle: {
            color: '#fff'
          },
          itemWidth: 10,
          itemHeight: 10,
          data: ['设备预警', '设备告警']
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
            name: '设备预警',
            data: [90, 80, 100, 70, 65, 69, 80, 100, 70, 65, 69, 66].map(item => item * 12),
            type: 'line',
            symbol: 'circle',
            smooth: true,
            showAllSymbol: true,
            symbolSize: 3,
            itemStyle: {
              color: '#FF845A',
              shadowColor: '#FF845A',
              shadowBlur: 10,
              borderColor: '#FF845A',
              borderWidth: 3,
              lineStyle: {
                color: '#FF845A'
              }
            }
          },
          {
            name: '设备告警',
            data: [70, 50, 80, 60, 62, 54, 34, 66, 60, 55, 50, 45].map(item => item * 12),
            type: 'line',
            symbol: 'circle',
            smooth: true,
            showAllSymbol: true,
            symbolSize: 3,
            itemStyle: {
              color: '#5A94C5',
              shadowColor: '#5A94C5',
              shadowBlur: 10,
              borderColor: '#5A94C5',
              borderWidth: 3,
              lineStyle: {
                color: '#5A94C5'
              }
            }
          }
        ]

      },
      configSwiper: {
        spaceBetween: 0,
        slidesPerView: 4
      },
      swiperList: new Array(14).fill(0).map((value, index) => ({
        name: 'SMT1' + (Math.ceil(Math.random() * 1024)),
        location: '***路' + (Math.ceil(Math.random() * 999)) + '号',
        status: ['已处理', '待处理'][(Math.ceil(Math.random() * 3))] || '已处理',
        abnormal: '异常' + (Math.ceil(Math.random() * 9))
      }))
    }
  },
  beforeDestroy () {
    clearInterval(this._setInterval1)
    clearInterval(this._setInterval2)
  },
  methods: {
    lineReady1 (chart) {
      let len = 0
      clearInterval(this._setInterval1)
      this._setInterval1 = setInterval(() => {
        if (len === 12) len = 0
        chart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: len
        })
        len++
      }, 3200)
    },
    lineReady2 (chart) {
      let len = 0
      clearInterval(this._setInterval2)
      this._setInterval2 = setInterval(() => {
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
.mock_table_list {
  .mock_table_header {
    padding: 8px 0;
    font-weight: 520;
    background: RGBA(12, 30, 49, 1);
  }

  .grid-columns-item {
    cursor: pointer;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .stripe_bar1 {
    background: linear-gradient(
      90deg,
      rgba(58, 76, 254, 0.22),
      rgba(38, 191, 255, 0) 100%
    );
  }

  .stripe_bar2 {
    background: linear-gradient(
      90deg,
      RGBA(26, 47, 71, 0.22),
      rgba(38, 191, 255, 0) 100%
    );
  }
}
</style>
