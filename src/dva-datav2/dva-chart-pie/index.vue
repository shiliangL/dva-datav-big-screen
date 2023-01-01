
<script>

import { hexToRgba } from 'dva-datav2/utils/index'
import { generateDatavDecoratorRoundIntervalSeries } from 'dva-datav2/utils/decoratorOpt'

export default {
  name: 'DvaChartPie',
  props: {
    chartData: {
      type: Array,
      desc: '数据项',
      default: () => [
        { name: '智慧城市', value: 1024 },
        { name: '智慧城市', value: 1024 },
        { name: '智慧城市', value: 1024 },
        { name: '智慧城市', value: 1024 },
        { name: '智慧城市', value: 2024 }
      ]
    },
    color: {
      type: Array,
      desc: '仅仅支持16进制颜色',
      default: () => [
        '#00ffff',
        '#006ced',
        '#00cfff',
        '#04e893',
        '#ffe000',
        '#73c0de',
        '#F84949',
        '#FC6AA4',
        '#C182E5',
        '#9044F5',
        '#592CF3'
      ]
    },
    unit: {
      type: String,
      desc: '显示中间单位',
      default: () => ''
    },
    desc: {
      type: String,
      desc: '汇总描述',
      default: () => '汇总情况'
    },
    numberColor: {
      type: String,
      desc: '显示数字的颜色',
      default: () => '#63e1ff'
    },
    radius: {
      type: Array,
      desc: '圆环配置',
      default: () => ['64%', '82%']
    },
    isGap: {
      type: Boolean,
      desc: '是否有间隙',
      default: () => true
    },
    showDecorator: {
      type: Boolean,
      desc: '是否显示装饰圆环',
      default: () => true
    },
    showDecoratorLine: {
      type: Boolean,
      desc: '是否图例下划线装饰器',
      default: () => true
    },
    showFloor: {
      type: Boolean,
      desc: '是否显示装饰底部台',
      default: () => true
    },
    fixRadiusDecorator: {
      type: Number,
      desc: '装饰圆环最大半径减去的余量',
      default: () => 4
    },
    shadowBlur: {
      type: Number,
      desc: '图表模糊数值配置',
      default: () => 0
    },
    borderRadius: {
      type: Number,
      desc: '图表圆角',
      default: () => 2
    },
    iconType: {
      // 'radius1', 'radius2', 'radius3', 'rect1', 'rect2','rect3', 'iconfont xxxx'
      type: String,
      desc: '汇总描述',
      default: () => 'rect2' || 'iconfont icon-chart-bar'
    },
    legendClassName: {
      type: String,
      desc: '图例容器类名',
      default: () => ''
    },
    isAutoplay: {
      type: Boolean,
      desc: '是否自动高亮轮播',
      default: () => true
    },
    autoplayTime: {
      type: Number,
      desc: '自动高亮轮播时间',
      default: () => 2000
    },
    isUnit: {
      type: Boolean,
      desc: '数字后面加上 单位',
      default: () => false
    }
  },
  data () {
    return {
      currentIndex: -1
    }
  },
  computed: {
    total () {
      return this.chartData.reduce((sum, row) => sum + (row.value || 0), 0) || 0
    }
  },
  mounted () {
    this.$once('hook:beforeDestroy', () => {
      clearInterval(this._autoPlayTimer)
    })
  },
  methods: {
    ready (chart) {
      this.chart = chart
      this.$emit('ready', chart)
      if (this.isAutoplay) this.dispatchActionAuto()
    },
    generateOption (data = []) {
      const chartData = [] // 主要图表
      const chartDataDx = [] // 装饰器圆环
      const fixRem = this.total * 0.004
      const {
        color,
        isGap = true,
        shadowBlur,
        borderRadius,
        showDecorator = true,
        fixRadiusDecorator = 4,
        radius = ['64%', '82%']
      } = this

      const initOption = {
        color,
        animationEasing: 'elasticOut',
        backgroundColor: 'transparent',
        animationDelayUpdate: (k) => 5 * k,
        animationDelay: (idx) => idx * 10,
        tooltip: {
          show: false,
          trigger: 'item'
        },
        legend: {
          show: false
        },
        series: []
      }

      // 遍历数据项生成 series_pie_data
      let indexKey = -1
      for (let index = 0; index < data.length; index++) {
        const item = data[index]
        indexKey = (indexKey + 1) % color.length
        // TODO: 这里对外部的数据修改了,讲道理不应该这样搞
        item.color = item.color || color[indexKey]
        // 默认渐变颜色
        const row = {
          name: item.name,
          value: item.value,
          itemStyle: {
            shadowBlur,
            borderRadius,
            color: hexToRgba(item.color, 1),
            shadowColor: hexToRgba(item.color, 1)
          }
        }
        const _row = {
          name: item.name,
          value: item.value,
          itemStyle: {
            borderRadius,
            color: hexToRgba(item.color, 0.66)
          }
        }

        const gap = {
          name: '',
          value: fixRem,
          borderWidth: 0,
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          itemStyle: {
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)'
          }
        }

        if (isGap) {
          chartData.push(row, gap)
          chartDataDx.push(_row, gap)
        } else {
          chartData.push(row)
          chartDataDx.push(_row)
        }
      }

      const mainSeriesTypeOpt = {
        type: 'pie',
        name: '数据项图表',
        radius,
        center: ['50%', '50%'],
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: chartData || []
      }
      // 主要数据类型图表
      initOption.series.push(mainSeriesTypeOpt)

      // 装饰器一个小圆环
      if (showDecorator) {
        const r = radius[0].replaceAll('%', '') * 1 || 0
        const r2 = r - 2
        const r1 = r2 - fixRadiusDecorator
        const seriesTypeOptDx = {
          type: 'pie',
          name: '装饰器',
          center: ['50%', '50%'],
          radius: [`${r1}%`, `${r2}%`],
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          tooltip: {
            show: false
          },
          hoverAnimation: false,
          data: chartDataDx || []
        }
        if (r) initOption.series.push(seriesTypeOptDx)
      }

      return initOption
    },
    dispatchActionAuto () {
      const dataLen = this.chartData.length
      clearInterval(this._autoPlayTimer)
      this._autoPlayTimer = setInterval(() => {
        this.chart && this.chart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: this.currentIndex })
        this.currentIndex = (this.currentIndex + 1) % dataLen
        this.chart && this.chart.dispatchAction({ seriesIndex: 0, type: 'highlight', dataIndex: this.currentIndex })
      }, this.autoplayTime)
    }
  },
  render (h) {
    return h('div', {
      class: ['datav_chart_pie', { datav_chart_floor: this.showFloor }],
      style: {
        '--numberColor': this.numberColor
      }
    }, [
      h('div', { class: 'chart_box' }, [
        h('dva-core-chart', {
          on: {
            ready: (chart) => this.ready(chart)
          },
          props: {
            option: this.generateOption(this.chartData),
            decoratorConfig: {
              animation: true,
              show: !this.showDecorator,
              option: {
                backgroundColor: 'transparent',
                animationEasing: 'elasticOut',
                animationDelayUpdate: (k) => 5 * k,
                animationDelay: (idx) => idx * 10,
                series: [
                  generateDatavDecoratorRoundIntervalSeries({ startAngle: 0, intervalNum: 50, radius: ['55%', '58%'] })
                  // generateDatavDecoratorRoundIntervalSeries({ startAngle: 45, intervalNum: 8, radius: ['57%', '60%'] })
                  // generateDatavDecoratorRoundIntervalSeries({ startAngle: 0, intervalNum: 82, radius: ['88%', '89%'] })
                  // generateDatavDecoratorGaugeSeries({ radius: '70%', splitNumber: 25, splitLineWidth: 4, splitLineLength: 4 }),
                  // generateDatavDecoratorGaugeSeries({ radius: '110%', splitNumber: 35, splitLineWidth: 4, splitLineLength: 4 })
                ]
              }
            }
          }
        }, [
          h('div', { class: 'dva_chart_content_warp' }, [
            h('div', { class: 'dva_chart_content' }, [
              h('dva-count2', { class: 'content_number', props: { end: this.total } }),
              this.unit ? h('span', { class: 'content_unit' }, this.unit) : null
            ]),
            h('div', { class: 'content_desc' }, this.desc)
          ])
        ])
      ]),
      h('div', { class: 'chart_title' }, [
        h('div', { class: ['chart_title_inner', this.legendClassName] }, [
          this.chartData.map((item, index) => {
            return h('div', { class: ['dva-chart-desc-item', { decorator_line: this.showDecoratorLine }], style: { '--color': item.color } }, [
              h('div', { class: ['desc-item-cube', (item.iconType || this.iconType || 'rect1')] }),
              h('div', { class: 'desc-item-name' }, item.name),
              h('div', { class: 'desc-item-value' }, [
                h('dva-count2', { class: 'desc-item-value-count2', props: { end: item.value } }),
                this.isUnit
                  ? h('span', { class: 'desc-item-value-unit' }, item.unit)
                  : null
              ])
            ])
          })
        ])
      ])
    ])
  }
}
</script>

<style lang="scss" scoped>
.datav_chart_pie {
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  &.datav_chart_floor {
    width: 100%;
    height: 100%;
    position: relative;
    &::after {
      content: "";
      width: 100%;
      left: 0px;
      bottom: 2px;
      height: 16px;
      overflow: hidden;
      position: absolute;
      clip-path: polygon(4% 0, 100% 0%, 96% 100%, 0% 100%);
      box-shadow: 0px 1px 0px 0px rgba(69, 200, 255, 0.6);
      background: linear-gradient(0deg, rgba(54, 134, 255, 0.6), transparent);
    }
  }

  .chart_box {
    overflow: hidden;
  }
  .chart_title {
    max-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      width: 2px;
      height: 10px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: linear-gradient(
        0deg,
        transparent,
        $base-color-yellow,
        $base-color-yellow,
        transparent
      );
      cursor: pointer;
    }
    &::-webkit-scrollbar-track {
      background: linear-gradient(
        0deg,
        transparent,
        $themeColor,
        $themeColor,
        transparent
      );
    }

    // 例描述部分
    .chart_title_inner {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
    .dva-chart-desc-item {
      width: 100%;
      display: grid;
      cursor: pointer;
      margin: 4px 0;
      padding-left: 6px;
      position: relative;
      align-items: center;
      justify-content: stretch;
      grid-template-columns: auto 1fr auto;

      &.decorator_line {
        &::after {
          content: "";
          width: 100%;
          left: 0px;
          height: 1px;
          bottom: -2px;
          overflow: hidden;
          position: absolute;
          background: linear-gradient(
            270deg,
            rgba(65, 139, 194, 0) 0%,
            var(--color) 100%
          );
        }
      }

      .desc-item-cube {
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        &.radius1 {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color);
          border: 2px solid rgba(225, 225, 255, 0.88);
        }
        &.radius2 {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: none;
          border: 2px solid var(--color);
        }
        &.radius3 {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--color);
        }
        &.rect1 {
          width: 10px;
          height: 10px;
          background: var(--color);
        }
        &.rect2 {
          width: 8px;
          height: 8px;
          background: var(--color);
          border: 2px solid rgba(225, 225, 255, 0.88);
        }
        &.rect3 {
          width: 8px;
          height: 8px;
          border: 2px solid var(--color);
          background: rgba(225, 225, 255, 0);
        }

        &.iconfont {
          font-size: 14px;
          color: var(--color);
        }
      }
      .desc-item-name {
        margin-left: 4px;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .desc-item-value-count2 {
        padding: 0 4px;
        color: var(--numberColor);
      }
      .desc-item-value-unit{
        font-size: 12px;
        padding-right:4px;
        color: var(--numberColor);
      }
      .desc-item-value {
        display: flex;
        align-items: baseline;
      }
    }
  }
}

// 中间汇总描述区域
.dva_chart_content_warp {
  .dva_chart_content {
    display: flex;
    align-items: baseline;
    justify-content: center;
    color: var(--numberColor);
    .content_number {
      font-size: 18px;
      font-weight: 500;
      font-family: Blender;
    }
    .content_unit {
      font-size: 12px;
      padding-left: 2px;
      display: inline-block;
    }
  }
  .content_desc {
    font-size: 13px;
    text-align: center;
  }
}
</style>
