<template>
  <div class="datav-aside">
    <div class="datav-aside-item">
      <DvaTitleBar title="设备在线情况" />
      <div class="content">
        <dva-capsule-bar
          :config="item"
          v-for="(item,index) in capsuleList"
          :key="index"
        ></dva-capsule-bar>
      </div>
    </div>
    <div class="datav-aside-item">
      <DvaTitleBar title="设备区域统计" />
      <div class="content">
        <DvaChartPie
          class="dva-chart-box"
          :chartData="chartData"
        ></DvaChartPie>
      </div>
    </div>
    <div class="datav-aside-item">
      <DvaTitleBar title="设备动态排名情况" />
      <div class="content">
        <dva-core-chart
          class="dva-chart-box"
          @ready="barReady"
          :option="barOption"
        />
      </div>
    </div>
    <div class="datav-aside-item">
      <DvaTitleBar title="设备增长趋势" />
      <div class="content">
        <dva-chart-line
          class="dva-chart-box"
          />
          <!-- :option="lineOption" -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeviceDistributionLeft',
  desc: '设备分布左边面板',
  data () {
    return {
      capsuleList: [
        {
          title: '设备总数',
          unit: '个',
          list: [{
            title: '在线个数',
            value: 24523,
            unit: '个',
            color: 'linear-gradient(-90deg, #5071FF, #21CDFF)'
          },
          {
            title: '离线个数',
            value: 1033,
            unit: '个',
            color: 'linear-gradient(269deg, #fadb4d, #fff2b7)'
          }
          ]
        }
      ],
      chartData: [
        { name: '广东', value: 6022 },
        { name: '上海', value: 4016 },
        { name: '江苏', value: 3023 },
        { name: '北京', value: 2621 },
        { name: '浙江', value: 2012 }
      ],
      barOption: {
        title: {
          show: false,
          text: '全国省份动态排名'
        },
        legend: {
          show: false
        },
        grid: {
          top: '2%',
          left: '6%',
          right: '10%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [{
          show: false,
          type: 'value',
          max: 'dataMax'
        }],
        yAxis: [{
          max: 4, // only
          type: 'category',
          inverse: true,
          animationDuration: 300,
          animationDurationUpdate: 300,
          data: [
            '广东',
            '江苏',
            '山东',
            '浙江',
            '河北',
            '北京',
            '上海'
          ],
          axisLabel: {
            fontSize: 14
          },
          // y轴线
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff'
            }
          },
          // y轴刻度线
          axisTick: {
            show: false
          },
          // y轴水平线
          splitLine: {
            show: false
          }
        }],
        series: [
          {
            name: 'X',
            type: 'bar',
            barWidth: 16,
            realtimeSort: true,
            data: new Array(7).fill(0).map((value, index) => (Math.round(Math.random() * 100))),
            label: {
              fontSize: 14,
              show: true,
              color: '#FFF',
              position: 'right',
              valueAnimation: true
            },
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(0,244,255,1)'
                },
                {
                  offset: 1,
                  color: 'rgba(0,77,167,1)'
                }
                ]
              }
            }
          }
        ],
        animationDuration: 3000,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
      },
      lineOption: {
        title: {
          show: false,
          text: '全国省份动态排名'
        },
        legend: {
          show: false
        },
        grid: {
          top: '2%',
          left: '6%',
          right: '10%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [{
          show: false,
          type: 'value',
          max: 'dataMax'
        }],
        yAxis: [{
          max: 4, // only
          type: 'category',
          inverse: true,
          animationDuration: 300,
          animationDurationUpdate: 300,
          data: [
            '广东',
            '江苏',
            '山东',
            '浙江',
            '河北',
            '北京',
            '上海'
          ],
          axisLabel: {
            fontSize: 14
          },
          // y轴线
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff'
            }
          },
          // y轴刻度线
          axisTick: {
            show: false
          },
          // y轴水平线
          splitLine: {
            show: false
          }
        }],
        series: [
          {
            name: 'X',
            type: 'bar',
            barWidth: 16,
            realtimeSort: true,
            data: new Array(7).fill(0).map((value, index) => (Math.round(Math.random() * 100))),
            label: {
              fontSize: 14,
              show: true,
              color: '#FFF',
              position: 'right',
              valueAnimation: true
            },
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(0,244,255,1)'
                },
                {
                  offset: 1,
                  color: 'rgba(0,77,167,1)'
                }
                ]
              }
            }
          }
        ],
        animationDuration: 3000,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
      }
    }
  },
  mounted () {
    const data = [{
      name: '北京',
      value: 1314
    },
    {
      name: '天津',
      value: 314
    },
    {
      name: '河北',
      value: 1628
    },
    {
      name: '山西',
      value: 314
    },
    {
      name: '内蒙古',
      value: 156
    },
    {
      name: '辽宁',
      value: 687
    },
    {
      name: '吉林',
      value: 520
    },
    {
      name: '黑龙江',
      value: 441
    },
    {
      name: '上海',
      value: 1212
    },
    {
      name: '江苏',
      value: 2999
    },
    {
      name: '浙江',
      value: 2102
    },
    {
      name: '安徽',
      value: 717
    },
    {
      name: '福建',
      value: 689
    },
    {
      name: '江西',
      value: 654
    },
    {
      name: '山东',
      value: 2431
    },
    {
      name: '河南',
      value: 1014
    },
    {
      name: '湖北',
      value: 715
    },
    {
      name: '湖南',
      value: 515
    },
    {
      name: '广东',
      value: 3841
    },
    {
      name: '广西',
      value: 355
    },
    {
      name: '海南',
      value: 874
    },
    {
      name: '重庆',
      value: 697
    },
    {
      name: '四川',
      value: 610
    },
    {
      name: '贵州',
      value: 254
    },
    {
      name: '云南',
      value: 647
    },
    {
      name: '西藏',
      value: 56
    },
    {
      name: '陕西',
      value: 650
    },
    {
      name: '甘肃',
      value: 164
    },
    {
      name: '青海',
      value: 221
    },
    {
      name: '宁夏',
      value: 124
    },
    {
      name: '新疆',
      value: 78
    },
    {
      name: '香港',
      value: 0
    },
    {
      name: '澳门',
      value: 0
    },
    {
      name: '台湾',
      value: 0
    }
    ]

    const b = data.sort((a, b) => (b.value - a.value))
    console.log('b', b)
    console.log('b-name', b.map(i => i.name))
  },
  beforeDestroy () {
    clearInterval(this._setInterval)
  },
  methods: {
    barReady (chart) {
      const _this = this
      clearInterval(this._setInterval)
      function update () {
        const data = _this.barOption.series[0].data
        for (let i = 0; i < data.length; ++i) {
          Math.random() > 0.9 ? data[i] += Math.round(Math.random() * 100) : data[i] += Math.round(Math.random() * 10)
        }
        chart.setOption({
          series: _this.barOption.series
        })
      }
      this._setInterval = setInterval(() => {
        update()
      }, 5200)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
