export const generateDvaCommonConfig = () => ({
  style: {
    barBackground: 'RGBA(235, 238, 245, 0.06)' // bar 背景轨道演颜色
  },
  backgroundColor: 'transparent',
  animation: {
    animation: true,
    animationEasing: 'elasticOut',
    animationDelayUpdate: (k) => 5 * k,
    animationDelay: (idx) => idx * 10
  },
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
  grid: {
    top: '14%',
    left: '4%',
    right: '4%',
    bottom: '4%',
    containLabel: true
  },
  legend: {
    show: false,
    top: '2%',
    right: '4%',
    icon: 'stack',
    textStyle: {
      color: '#fff'
    },
    itemWidth: 8,
    itemHeight: 8
  },
  title: {
    show: false,
    x: 'center',
    top: '2%',
    text: '趋势统计分析',
    textStyle: {
      fontSize: 14,
      color: '#FFF',
      align: 'center',
      fontWeight: 'normal'
    }
  },
  tooltip: {
    line: {
      show: true,
      trigger: 'axis',
      textStyle: {
        color: '#fff'
      },
      backgroundColor: 'RGBA(235, 238, 245, 0.26)',
      axisPointer: {
        type: 'cross',
        label: {
          show: true,
          backgroundColor: '#6a7985'
        }
      }
    },
    bar: {
      show: true,
      trigger: 'axis',
      textStyle: {
        color: '#fff'
      },
      backgroundColor: 'RGBA(235, 238, 245, 0.26)',
      axisPointer: {
        type: 'shadow',
        label: {
          show: true,
          backgroundColor: '#6a7985'
        }
      }
    }
  },
  xAxis: [{
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
        opacity: 0.66,
        type: 'dashed',
        color: '#195384'
      }
    },
    // 默认无让图表取默认配置
    // data: []
    data: new Array(12).fill(0).map((value, index) => `${index + 1}月`)
  }],
  yAxis: [
    {
      // Y轴名称
      name: '',
      type: 'value',
      axisLabel: {
        color: '#ddd',
        formatter: '{value}'
      },
      // y轴线
      axisLine: {
        show: false,
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
        show: false,
        lineStyle: {
          opacity: 0.88,
          type: 'dashed',
          color: '#195384'
        }
      }
    },
    {
      // Y轴名称
      name: '',
      type: 'value',
      axisLabel: {
        color: '#ddd',
        formatter: '{value}'
      },
      // y轴线
      axisLine: {
        show: false,
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
        show: false,
        lineStyle: {
          opacity: 0.88,
          type: 'dashed',
          color: '#195384'
        }
      }
    }
  ]
})

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
  const dvaOpt = generateDvaCommonConfig()
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
  const dvaOpt = generateDvaCommonConfig()
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
