var chartDom1 = document.getElementById('pie');
var myChart1 = echarts.init(chartDom1);
var option1;

setTimeout(function () {
  option1 = {
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
        ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
        ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
        ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
        ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
        ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
      ]
    },
    xAxis: [{ type: 'category',
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
        type: 'bar',
        stack: 'Ad',
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'bar',
        stack: 'Ad',
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'bar',
        stack: 'Ad',
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
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
              fontSize: 20,
              fontWeight: 'bold'
            }
        },
        labelLine: {
            show: false
          },
        label: {
          show: false,
          formatter: '{b}: {@2012} ({d}%)',
          position: 'center',
          color: '#fff'
        },
        encode: {
          itemName: 'product',
          value: '2012',
          tooltip: '2012'
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
