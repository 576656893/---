var chartDom_line = document.querySelector('.bar .chart');
var myChart = echarts.init(chartDom_line);
var option;

const colors = ['#5470C6', '#EE6666'];
option = {
  color: colors,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    },
    position: function (pt) {
      return [pt[0], '10%'];
    }
  },
  grid: {
    show: false,
    right: '10%'
  },
  legend: {
    orient:'horizontal',
    left: 'center',
    data: ['城乡人口比例', '城镇人口数','乡村人口数'],
    textStyle: {
        color: '#fff'
    }
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#fff'
        }
      },
      // prettier-ignore
      data: [1953, 1964, 1982, 1990, 2000, 2010, 2020]
    }
  ],
  yAxis: [
    {
      splitLine: {show: false},
      type: 'value',
      name: '人口比例',
      position: 'right',
      alignTicks: false,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#09eb27'
        }
      },
      axisLabel: {
        formatter: '{value} '
      }
    },
    {
      splitLine: {show: false},
      type: 'value',
      name: '人口数',
      position: 'left',
      alignTicks: false,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[1]
        }
      },
      axisLabel: {
        formatter: '{value}'
      }
    }
  ],
  series: [
    {
      name: '城乡人口比例',
      type: 'line',
      color: 'green',
      lineStyle: {
        color: '#09eb27'
      },
      data: [
        0.15, 0.22, 0.26, 0.36, 0.57, 0.99, 1.77
      ]
    },
    {
      name: '城镇人口数',
      yAxisIndex: 1,
      type: 'bar',
      data: [
        7726, 12710, 21082, 29971, 45844, 66557, 90199
      ]
    },
    {
      name: '乡村人口数',
      yAxisIndex: 1,
      type: 'bar',
      data: [
        50534, 50979, 56748, 67419, 79736, 80739, 83397
      ]
    }
  ]
};

option && myChart.setOption(option);