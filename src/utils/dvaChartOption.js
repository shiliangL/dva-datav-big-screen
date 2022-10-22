import { deepMerge } from '@/utils'

// 是否是十六进制颜色
export function isHexColor (color) {
  return /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color)
}

// 颜色16进制换算rgba,添加透明度
export function hexToRgba (hex, opacity) {
  return `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt(
    '0x' + hex.slice(3, 5)
  )},${parseInt('0x' + hex.slice(5, 7))}, ${opacity})`
}

// dva 主题颜色
export const themeColors = [
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

// WARNING: 公用配置项 - 组件以及很多地方依赖此项，统一维护配置。
export const dvaOpt = {
  radius: ['62%', '82%'],
  center: ['50%', '50%'],
  color: [
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
  ],
  backgroundColor: 'transparent',
  animation: {
    animation: true,
    animationEasing: 'elasticOut',
    animationDelayUpdate: (k) => 5 * k,
    animationDelay: (idx) => idx * 10
  },
  grid: {
    top: '16%',
    left: '4%',
    right: '4%',
    bottom: '6%',
    containLabel: true
  },
  title: {
    show: false,
    textStyle: {
      fontSize: 16,
      color: '#FFF',
      align: 'center',
      fontWeight: 'normal'
    }
  },
  // x轴颜色
  xAxis: {
    lineStyle: {
      color: '#186afe'
    }
  },
  // y轴颜色
  yAxis: {
    lineStyle: {
      color: '#186afe'
    }
  }
}

// 默认数据
const initChartData = {
  radar: [
    { name: '前端', value: Math.ceil(Math.random() * 1024) },
    { name: '后端', value: Math.ceil(Math.random() * 1024) },
    { name: 'IOS', value: Math.ceil(Math.random() * 1024) },
    { name: '安卓', value: Math.ceil(Math.random() * 1024) },
    { name: '大数据', value: Math.ceil(Math.random() * 1024) },
    { name: '人工智能', value: Math.ceil(Math.random() * 1024) }
  ],
  pie: [
    { name: '智慧城市A', value: Math.ceil(Math.random() * 1024), unit: '个' },
    { name: '智慧城市A', value: Math.ceil(Math.random() * 1024), unit: '个' },
    { name: '智慧城市A', value: Math.ceil(Math.random() * 1024), unit: '个' },
    { name: '智慧城市A', value: Math.ceil(Math.random() * 1024), unit: '个' },
    { name: '智慧城市A', value: Math.ceil(Math.random() * 1024), unit: '个' },
    { name: '智慧城市A', value: Math.ceil(Math.random() * 1024), unit: '个' }
  ],
  line: [
    {
      type: 'line',
      name: '报警次数',
      stack: 'y',
      data: new Array(12)
        .fill(0)
        .map((value, index, array) => Math.ceil(Math.random() * 120))
    },
    {
      type: 'line',
      name: '警报次数',
      stack: 'y',
      data: new Array(12)
        .fill(0)
        .map((value, index, array) => Math.ceil(Math.random() * 120))
    },
    {
      type: 'line',
      name: '预警次数',
      stack: 'y',
      data: new Array(12)
        .fill(0)
        .map((value, index, array) => Math.ceil(Math.random() * 120))
    }
  ],
  bar: [
    {
      type: 'bar',
      name: '报警次数',
      stack: 'y',
      data: new Array(12)
        .fill(0)
        .map((value, index, array) => Math.ceil(Math.random() * 120))
    },
    {
      type: 'bar',
      name: '警报次数',
      stack: 'y',
      data: new Array(12)
        .fill(0)
        .map((value, index, array) => Math.ceil(Math.random() * 120))
    },
    {
      type: 'bar',
      name: '预警次数',
      stack: 'y',
      data: new Array(12)
        .fill(0)
        .map((value, index, array) => Math.ceil(Math.random() * 120))
    }
  ]
}

// ------ 装饰器部分开始 ------

// 生成 series_type_data 数据项
export function generateSeriesTypeData ({ intervalNum = 4, color = '' }) {
  const dataArray = []
  for (let i = 0; i < intervalNum; i++) {
    if (i % 2 === 0) {
      dataArray.push({
        value: 25,
        name: (i + 1).toString(),
        itemStyle: {
          color: color || 'rgba(88,142,197,0.5)',
          borderWidth: 0,
          shadowBlur: 8,
          borderColor: 'rgba(0,0,0,0)'
        }
      })
    } else {
      dataArray.push({
        name: (i + 1).toString(),
        value: 20,
        itemStyle: {
          borderWidth: 0,
          color: 'rgba(0,0,0,0)',
          borderColor: 'rgba(0,0,0,0)'
        }
      })
    }
  }
  return dataArray
}

// 间隔圆环-装饰器-series
export function generateDatavDecoratorRoundIntervalSeries (config = {}) {
  const {
    color = '', // 颜色
    startAngle = 0,
    intervalNum = 4, // 0 时为吗有间隔的整圆
    radius = dvaOpt.radius,
    center = dvaOpt.center
  } = config || {}

  const initConfig = {
    radius,
    center,
    type: 'pie',
    startAngle,
    animation: false,
    hoverAnimation: false,
    label: {
      show: false
    },
    labelLine: {
      show: false
    },
    data: !intervalNum ? [1] : generateSeriesTypeData({ intervalNum, color }),
    itemStyle: {
      borderWidth: 1,
      shadowBlur: 8,
      shadowColor: '',
      color: color || 'rgba(88,142,197,0.66)'
    },

    backgroundColor: 'transparent',
    animationEasing: 'elasticOut',
    animationDelayUpdate: (k) => 5 * k,
    animationDelay: (idx) => idx * 10
  }
  return initConfig
}

// 仪表盘圆环-装饰器-series
export function generateDatavDecoratorGaugeSeries (config = {}) {
  const {
    color = '', // 颜色
    radius = '110%', // 半径
    splitLineLength = 4, // 刻度线长度
    splitLineWidth = 2, // 刻度线宽度
    splitNumber = 30, // 刻度数量
    center = dvaOpt.center
  } = config || {}

  const initConfig = {
    radius,
    center,
    type: 'gauge',
    startAngle: 90,
    endAngle: -270,
    axisLine: {
      show: false
    },
    // 刻度样式
    axisTick: {
      show: false
    },
    splitNumber,
    // 分隔线样式
    splitLine: {
      length: splitLineLength,
      show: true,
      lineStyle: {
        width: splitLineWidth,
        color: color || 'rgba(88,142,197,0.66)'
      }
    },
    axisLabel: {
      show: false
    },
    // 仪表盘指针
    pointer: {
      show: false
    },
    detail: {
      show: false
    },
    animation: false,
    hoverAnimation: false,
    backgroundColor: 'transparent',
    animationEasing: 'elasticOut',
    animationDelayUpdate: (k) => 5 * k,
    animationDelay: (idx) => idx * 10
  }
  return initConfig
}

// ------ 装饰器部分结束 ------

// dva-radar-chart 生成雷达图 应用中
export function generateDatavRadarChartOption (
  data = initChartData.radar || [],
  config = {}
) {
  const chartData = []
  const legendName = []
  const chartDataValue = []

  const {
    radarShape = 'polygon', //  雷达图绘制类型，支持 'polygon' 和 'circle'。
    // fixDoubleRadius = 4,
    // itemStyleGradientColor = null,
    splitLineColor = '#43CBE3', // 网格线 + 对角射线
    showTooltip = false,
    radius = '60%',
    center = dvaOpt.center
  } = config || dvaOpt

  data.forEach((item) => {
    const { name = '', value = 0 } = item || {}
    legendName.push(name)
    chartDataValue.push(value)
    chartData.push({ name, value, max: item.value + 200 })
  })

  const initOption = {
    backgroundColor: 'transparent',
    animationEasing: 'elasticOut',
    animationDelayUpdate: (k) => 5 * k,
    animationDelay: (idx) => idx * 10,
    tooltip: {
      show: showTooltip,
      confine: true,
      enterable: true // 鼠标是否可以移动到tooltip区域内
    },
    radar: {
      shape: radarShape,
      center,
      radius,
      // 设置雷达图中间射线的颜色
      axisLine: {
        lineStyle: {
          color: splitLineColor
        }
      },
      axisName: {
        rich: {
          a: {
            fontSize: 14,
            padding: [0, 0, 0, 0],
            color: 'rgba(255,255,255,0.95)'
          },
          b: {
            color: '#43CBE3',
            align: 'center',
            fontSize: 16
          }
        },
        // lineHeight: 12,
        formatter: (a, b) => {
          return `{a|${a}}\n{b|${b.value}}`
          // return `{a|${a}}{b|${b.value}}`
        }
      },
      // 雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
      splitArea: {
        show: false,
        areaStyle: {
          color: 'rgba(255,0,0,0)' // 图表背景的颜色
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: splitLineColor // 设置网格的颜色
        }
      },
      indicator: chartData
    },
    series: [
      {
        name: '', // tooltip中的标题
        type: 'radar', // 表示是雷达图
        symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
        symbolSize: 0, // 拐点的大小
        label: {
          show: false
        },
        areaStyle: {
          opacity: 1, // 区域透明度
          // 单项区域填充样式
          color: {
            type: 'linear',
            x: 0, // 右
            y: 0, // 下
            x2: 1, // 左
            y2: 1, // 上
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0,155,255,1)' || '#3598B9'
              },
              {
                offset: 0.4,
                color: 'rgba(70,122,141,0.6)'
              },
              {
                offset: 0.6,
                color: 'RGBA(41, 237, 250, 0.4)'
              },
              {
                offset: 1,
                color: 'RGBA(41, 237, 250, 0.88)'
              }
            ],
            globalCoord: true
          }
        },
        data: [
          {
            name: '',
            value: chartDataValue,
            itemStyle: {
              // color: 'rgba(0,155,255,1)',
              // color: {
              //   type: 'linear',
              //   x: 0, // 右
              //   y: 0, // 下
              //   x2: 1, // 左
              //   y2: 1, // 上
              //   colorStops: [
              //     {
              //       offset: 0,
              //       color: '#3598B9'
              //     },
              //     {
              //       offset: 1,
              //       color: '#790BD0'
              //     }
              //   ],
              //   globalCoord: false
              // },
              // lineStyle: {
              //   color: 'rgba(0,155,255,1)'
              // }
            }
          }
        ]
      }
    ]
  }

  return initOption
}

// dva-pie-chart 生成常规饼图 应用中
export function generateDatavPieChartOption (
  data = initChartData.pie,
  config = {}
) {
  const chartData = []
  const chartDataDx = []
  const {
    isDouble = true,
    fixDoubleRadius = 4,
    itemStyleGradientColor = null,
    transformGradientColor = false,
    showTooltip = false,
    radius = dvaOpt.radius,
    center = dvaOpt.center,
    color = dvaOpt.color
  } = config || dvaOpt

  const initOption = {
    color,
    backgroundColor: 'transparent',
    animationEasing: 'elasticOut',
    animationDelayUpdate: (k) => 5 * k,
    animationDelay: (idx) => idx * 10,
    tooltip: {
      show: showTooltip,
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
    const initItemStyleGradientColor = {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 1,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: hexToRgba(item.color, 0.66)
        },
        {
          offset: 1,
          color: hexToRgba(item.color, 1)
        }
      ],
      globalCoord: true
    }

    const itemStyleColor = transformGradientColor
      ? itemStyleGradientColor || initItemStyleGradientColor
      : item.color || color[indexKey]

    const row = {
      name: item.name,
      value: item.value,
      itemStyle: {
        normal: {
          opacity: 1,
          shadowBlur: 4,
          borderWidth: 1,
          shadowColor: '',
          color: itemStyleColor
        }
      }
    }
    const _row = {
      name: item.name,
      value: item.value,
      itemStyle: {
        normal: {
          opacity: 1,
          shadowBlur: 4,
          borderWidth: 1,
          shadowColor: '',
          color: itemStyleColor
        }
      }
    }
    chartData.push(row)
    chartDataDx.push(_row)
  }

  const mainSeriesTypeOpt = {
    type: 'pie',
    name: '数据项图表',
    radius,
    center,
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
  if (isDouble) {
    const r = radius[0].replaceAll('%', '') * 1 || 0
    const r2 = r - 2
    const r1 = r2 - fixDoubleRadius
    const seriesTypeOptDx = {
      type: 'pie',
      name: '装饰器',
      center,
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
}

export function generateDatavRadiusChartOptionPro (data = 0, config = {}) {
  const {
    startAngle = 90,
    showWater = false, // 是否显示水波纹
    fixDiff = 1, // 圆环和水图之间的间隙百分比
    radius = dvaOpt.radius, // ['74%', '82%']
    center = dvaOpt.center, // ['50%', '50%']
    color = dvaOpt.color || ['#00ffff', '#006ced'],
    barReactivity = true, // bar是否和数据联动
    backgroundColor = 'transparent', // 图表背景颜色
    barBackground = 'RGBA(235, 238, 245, 0.16)' // bar 背景轨道演颜色
  } = config || {}

  const waterPercentage = data ? data / 100 : 0

  const [color1, color2 = color1] = color.length ? color : ['#00ffff', '#006ced']

  const initOption = {
    backgroundColor,
    animationEasing: 'elasticOut',
    animationDelayUpdate: (k) => 5 * k,
    animationDelay: (idx) => idx * 10,
    angleAxis: {
      min: 0,
      max: 100,
      startAngle,
      show: false,
      polarIndex: 0,
      boundaryGap: center
    },
    radiusAxis: {
      type: 'category',
      show: false,
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    polar: [
      {
        center,
        radius
      }
    ],
    xAxis: {
      show: false,
      type: 'value'
    },
    yAxis: [
      {
        show: false,
        type: 'category'
      }
    ],
    series: []
  }

  // 颜色判断 多颜色渲染渐变颜色
  const itemStyleGradientColor =
    color.length === 1
      ? color1
      : {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: color1 },
            { offset: 1, color: color2 }
          ]
        }

  const r1 = radius[0].replaceAll('%', ' ') * 1
  const r2 = `${r1 - fixDiff}%`

  initOption.series.push({
    name: '',
    type: 'bar',
    data: barReactivity ? [data] : [100],
    roundCap: true,
    showBackground: true,
    backgroundStyle: {
      color: barBackground
    },
    coordinateSystem: 'polar',
    itemStyle: {
      color: itemStyleGradientColor
    }
  })

  const waterConfig = {
    radius: r2,
    type: 'liquidFill',
    center,
    itemStyle: {
      color: itemStyleGradientColor
    },
    label: {
      show: false
    },
    data: [
      waterPercentage,
      {
        value: waterPercentage,
        direction: 'left'
      }
    ],
    backgroundStyle: {
      borderWidth: 1,
      color: 'transparent'
    },
    outline: {
      show: true,
      itemStyle: {
        borderWidth: 0
      },
      borderDistance: 0
    }
  }
  if (showWater) initOption.series.push(waterConfig)
  return initOption
}

// dva-radius-chart 生成常规折线+柱形 应用中
export function generateDatavLine2BarChartOption (
  data = initChartData.line,
  config = {}
) {
  const {
    color = dvaOpt.color,
    backgroundColor = 'transparent', // 图表背景颜色
    barBackground = 'RGBA(235, 238, 245, 0.06)' // bar 背景轨道演颜色
  } = config || {}

  const initOption = {
    backgroundColor,
    animationEasing: 'elasticOut',
    animationDelayUpdate: (k) => 5 * k,
    animationDelay: (idx) => idx * 10,
    title: {
      top: -4,
      show: false,
      text: 'A类统计情况',
      left: 'center',
      textStyle: {
        color: '#FFF',
        align: 'center'
      }
    },
    legend: {
      show: false,
      right: 10,
      icon: 'stack',
      textStyle: {
        color: '#fff'
      },
      itemWidth: 10,
      itemHeight: 10,
      data: data.map((kk) => kk.name)
    },
    grid: {
      top: '15%',
      left: '4%',
      right: '4%',
      bottom: '6%',
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'item'
    },
    xAxis: [
      {
        // X轴名称
        name: '',
        type: 'category',
        // 是否有间隔
        boundaryGap: true,
        axisLabel: {
          color: '#ddd'
        },
        // X轴线
        axisLine: {
          show: true,
          lineStyle: {
            color: '#186afe'
          }
        },
        // x轴刻度线
        axisTick: {
          show: false
        },
        // X轴水平线
        splitLine: {
          show: false,
          lineStyle: {
            color: '#195384'
          }
        },
        // 默认无让图表取默认配置
        data: new Array(12).fill(0).map((value, index) => (`${index + 1}月`))
      }
    ],
    yAxis: [
      {
        // Y轴名称
        name: '',
        type: 'value',
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: '#ddd'
          }
        },
        // y轴线
        axisLine: {
          show: true,
          lineStyle: {
            color: '#186afe'
          }
        },
        // y轴刻度线
        axisTick: {
          show: false
        },
        // y轴水平线
        splitLine: {
          show: true,
          lineStyle: {
            opacity: 0.62,
            type: 'dashed',
            color: '#195384'
          }
        }
      }
    ],
    series: []
  }
  // 合并配置
  const series = []
  let indexKey = -1
  for (let index = 0; index < data.length; index++) {
    const item = data[index]
    // itemStyle, areaStyle
    const { name, stack, type = 'bar' } = data[index]
    indexKey = (indexKey + 1) % color.length
    const itemColor = item.color || color[indexKey]
    // 合并配置
    const seriesRow = {
      name,
      type,
      stack,
      data: item.data || [],
      smooth: false,
      symbol: 'circle',
      itemStyle: {
        color: itemColor
      },
      areaStyle: {
        color: 'transparent'
      },
      barCategoryGap: '50%',
      showBackground: true,
      backgroundStyle: {
        color: barBackground
      }
    }
    series.push(deepMerge(seriesRow, item))
  }

  initOption.series = series

  return deepMerge(initOption, config)
}

// 生成带区域面积渐变的折线图
export function generateDatavLineChartOptionPro (
  data = initChartData.line,
  config = {}
) {
  const {
    showLegend = false,
    color = dvaOpt.color,
    xAxisData = new Array(12).fill(0).map((value, index) => (`${index + 1}月`)),
    backgroundColor = 'transparent', // 图表背景颜色
    barBackground = 'RGBA(235, 238, 245, 0.06)' // bar 背景轨道演颜色
  } = config || {}

  const initOption = {
    backgroundColor,
    animationEasing: 'elasticOut',
    animationDelayUpdate: (k) => 5 * k,
    animationDelay: (idx) => idx * 10,
    title: {
      show: false,
      text: 'A类统计情况',
      left: 'center',
      textStyle: {
        color: '#FFF',
        align: 'center'
      }
    },
    legend: {
      show: showLegend,
      top: 10,
      right: 2,
      icon: 'stack',
      textStyle: {
        color: '#fff'
      },
      itemWidth: 10,
      itemHeight: 10,
      data: data.map((kk) => kk.name)
    },
    grid: {
      top: '18%',
      left: '4%',
      right: '4%',
      bottom: '4%',
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          color: '#ddd',
          fontSize: 12
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#FFFFFF10'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#195384'
          }
        },
        // 默认无让图表取默认配置
        data: xAxisData
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '',
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: '#ddd',
            fontSize: 12
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#FFFFFF10'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#FFFFFF05'
          }
        }
      }
    ],
    series: []
  }
  // 合并配置
  const series = []
  let indexKey = -1
  for (let index = 0; index < data.length; index++) {
    const item = data[index]
    // itemStyle, areaStyle
    const { name, stack = 'y', type = 'line' } = data[index]
    indexKey = (indexKey + 1) % color.length
    const itemColor = item.color || color[indexKey]
    // 合并配置
    const seriesRow = {
      name,
      type,
      stack,
      data: item.data || [],
      smooth: true,
      symbol: 'circle',
      itemStyle: {
        color: itemColor
      },
      lineStyle: {
        color: itemColor,
        width: 1
      },
      areaStyle: {
        // color: 'transparent'
        color: {
          type: 'linear',
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [{
            offset: 0,
            color: 'rgba(7,44,90,0.2)'
          },
          {
            offset: 1,
            color: itemColor
          }],
          globalCoord: false
        }
      },
      backgroundStyle: {
        color: barBackground
      }
    }
    series.push(deepMerge(seriesRow, item))
  }

  initOption.series = series

  return deepMerge(initOption, config)
}

// 生成渐变柱状图
export function generateDatavBarChartOptionPro (
  data = initChartData.bar,
  config = {}
) {
  const {
    showLegend = false,
    color = dvaOpt.color,
    xAxisData = new Array(12).fill(0).map((value, index) => (`${index + 1}月`)),
    backgroundColor = 'transparent', // 图表背景颜色
    // axisLabelFormatter = null,
    barBackground = 'RGBA(235, 238, 245, 0.06)' // bar 背景轨道演颜色
  } = config || {}
  const initOption = {
    backgroundColor,
    animationEasing: 'elasticOut',
    animationDelayUpdate: (k) => 5 * k,
    animationDelay: (idx) => idx * 10,
    title: {
      show: false,
      text: 'A类统计情况',
      left: 'center',
      textStyle: {
        color: '#FFF',
        align: 'center'
      }
    },
    legend: {
      show: showLegend,
      top: 10,
      right: 2,
      icon: 'stack',
      textStyle: {
        color: '#fff'
      },
      itemWidth: 10,
      itemHeight: 10,
      data: data.map((kk) => kk.name)
    },
    grid: {
      top: '18%',
      left: '4%',
      right: '4%',
      bottom: '4%',
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'item'
      // axisPointer: {
      //   type: 'cross',
      //   label: {
      //     backgroundColor: '#6a7985'
      //   }
      // }
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        axisLabel: {
          color: '#ddd',
          fontSize: 12
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#FFFFFF10'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#195384'
          }
        },
        // 默认无让图表取默认配置
        data: xAxisData
      }
    ],
    yAxis: [
      {
        name: '',
        type: 'value',
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: '#ddd',
            fontSize: 12
            // formatter: (value) => {
            //   console.log(value, '=value=')
            //   return axisLabelFormatter ? axisLabelFormatter(value) : value
            // }
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#FFFFFF10'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#FFFFFF05'
          }
        }
      }
    ],
    series: []
  }

  // 合并配置
  const series = []
  let indexKey = -1
  for (let index = 0; index < data.length; index++) {
    const item = data[index]
    // itemStyle, areaStyle
    const { name, stack = 'y', type = 'bar' } = data[index]
    indexKey = (indexKey + 1) % color.length
    const isColorArray = Array.isArray(item.color)
    const itemColor = (isColorArray) ? item.color : (item.color || color[indexKey])
    // 合并配置
    const seriesRow = {
      name,
      type,
      stack,
      data: item.data || [],
      itemStyle: {
        color: isColorArray
          ? {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: itemColor[0]
              },
              {
                offset: 1,
                color: itemColor[1] ? itemColor[1] : itemColor[0]
              }],
              globalCoord: false
            }
          : itemColor
      },
      backgroundStyle: {
        color: barBackground
      }
    }
    series.push(deepMerge(seriesRow, item))
  }

  initOption.series = series

  return deepMerge(initOption, config)
}
