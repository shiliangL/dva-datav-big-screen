
export function generateLineBarChartOption (data = [], opt = {}) {
  const { xAxisData = [], color, boundaryGap = true, showLegend = false } = opt
  const option = {
    color: color || ['#00cfff', '#006ced'],
    backgroundColor: 'transparent',
    animationEasing: 'elasticOut',
    animationDelayUpdate: (k) => 5 * k,
    animationDelay: (idx) => idx * 10,
    legend: {
      top: 10,
      right: 10,
      icon: 'stack',
      textStyle: {
        color: '#fff'
      },
      itemWidth: 8,
      itemHeight: 8,
      show: showLegend,
      data: data.map((kk) => kk.name)
    },
    grid: {
      left: '4%',
      right: '4%',
      top: '20%',
      bottom: '6%',
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'item'
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: boundaryGap,
        axisLabel: {
          interval: 0,
          // rotate: 40,
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
        data: xAxisData || []
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

  // 内置seriesData
  const defaultRow = {
    type: 'bar',
    name: '',
    stack: 'y',
    label: {
      show: false
    },
    smooth: true,
    barGap: '50%',
    showBackground: true,
    barCategoryGap: '50%',
    backgroundStyle: {
      color: 'rgba(255,255,255,0.05)'
    },
    data: []
  }

  for (let index = 0; index < data.length; index++) {
    const dataItemRow = data[index]
    option.series.push({
      ...defaultRow,
      ...dataItemRow
    })
  }

  return option
}
