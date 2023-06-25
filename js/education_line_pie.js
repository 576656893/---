var chartDom1 = document.getElementById('pie');
var myChart1 = echarts.init(chartDom1);
var option1;

setTimeout(function () {
  option1 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
    grid: {
      show: false,
      right: '10%'
    },
    legend: {
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [
        ['年份', '1964', '1982', '1990', '2000', '2010','2020'],
        ['大专', 416, 615, 1422, 3611, 8930, 15467],
        ['高中', 1391, 6779, 8039, 11146, 14032, 15088],
        ['初中', 4680, 17892, 23344, 33961, 38788, 34507],
        ['小学', 28330, 35237, 37057, 35701, 26779, 24767]
      ]
    },
    xAxis: [{ type: 'category',
              axisTick: {
                    alignWithLabel: true
              },
                axisLine: {
                    show: true,
                    lineStyle: {
                    color: '#fff'
                    }
             }
            }],
    yAxis: [{ 
        gridIndex: 0 ,
        splitLine :{show: false},
        axisLine: {
            show: true,
            lineStyle: {
              color: '#fff'
            }
          },
        }],
    grid: { top: '55%' },
    series: [
      {
        name: '大专',
        type: 'bar',
        stack: 'Ad',
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'bar',
        name: '高中',
        stack: 'Ad',
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        name: '初中',
        type: 'bar',
        stack: 'Ad',
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        name: '小学',
        type: 'bar',
        stack: 'Ad',
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        radius: ['40%', '60%'],
        center: ['50%', '25%'],
        itemStyle: {
          borderRadius: 10,
          borderColor: '',
          borderWidth: 1
        },
        emphasis: {
            label: {
              show: true,
              fontSize: 18,
              fontWeight: 'bold'
            }
        },
        labelLine: {
            show: false
          },
        label: {
          show: false,
          formatter: '{b}: {@2020} ({d}%)',
          position: 'center',
          color: 'white'
        },
        encode: {
          itemName: '年份',
          value: '2020',
          tooltip: '2020'
        }
      }
    ]
  };
  myChart1.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart1.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });
  myChart1.setOption(option1);
});

option1 && myChart1.setOption(option1);
