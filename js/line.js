var chartDom = document.getElementById('line');
var myChart = echarts.init(chartDom);
var option;

let base = +new Date(1988, 9, 3);
let oneDay = 24 * 3600 * 1000;
let data = [[base, Math.random() * 300]];
for (let i = 1; i < 20000; i++) {
  let now = new Date((base += oneDay));
  data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
}
option = {
  tooltip: {
    trigger: 'axis',
    position: function (pt) {
      return [pt[0], '10%'];
    }
  },
  grid: {
    show: false,
    right: '10%'
  },
  xAxis: [{
    type: 'time',
    boundaryGap: false,
    alignTicks: false,
    splitLine:{show:false},
    axisLine: {
        lineStyle: {
            color: '#fff'
        }
    }
  }],
  yAxis: [{
    type: 'value',
    boundaryGap: [0, '100%'],
    splitLine:{show:false},
    axisLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        }
      },
  }],
  dataZoom: [
    {
    type: 'inside',
    start: 0,
    end: 20,
    },
    {
        start: 0,
        end: 20,
        top: '20px',
        dataBackground: {//数据阴影的样式。
            lineStyle: {color: '#fff'},//阴影的线条样式
            areaStyle: {color: 'grey'},//阴影的填充样式
        },
        textStyle: {
            color: '#fff'
        },
        borderColor: 'grey',
    }
  ],
  series: [
    {
      name: 'Fake Data',
      type: 'line',
      smooth: true,
      symbol: 'none',
      areaStyle: {},
      data: data
    }
  ]
};

option && myChart.setOption(option);
