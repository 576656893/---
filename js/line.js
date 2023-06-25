var chartDom = document.getElementById('line');
var myChart = echarts.init(chartDom);
var option;

let base = +new Date(1988, 9, 3);
let oneDay = 24 * 3600 * 1000;
let data1 = [
  54167,
  55196,
  56300,
  57482,
  58796,
  60266,
  61465,
  62828,
  64653,
  65859,
  65994,
  66207,
  67207,
  67296,
  69172,
  70499,
  72538,
  74542,
  76368,
  78534,
  80671,
  82992,
  85229,
  87177,
  89211,
  90859,
  92420,
  93717,
  94974,
  96259,
  97542,
  98705,
  100072,
  101654,
  103008,
  104357,
  105851,
  107507,
  109300,
  111026,
  112704,
  114333,
  115823,
  117171,
  118517,
  119850,
  121121,
  122389,
  123626,
  124761,
  125786,
  126743,
  127627,
  128453,
  129227,
  129988,
  130756,
  131448,
  132129,
  132802,
  133450,
  134091,
  134916,
  135922,
  136726,
  137646,
  138326,
  139232,
  140011,
  140541,
  141008,
  141175,
  141212,
  141260];
// let data = [[base, Math.random() * 300]];
// for (let i = 1; i < 20000; i++) {
//   let now = new Date((base += oneDay));
//   data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
// }
option = {
  tooltip: {
    trigger: 'axis',
    position: function (pt) {
      return [pt[0], '10%'];
    }
  },
  xAxis: [{
    type: 'category',
    boundaryGap: false,
    alignTicks: false,
    splitLine:{show:false},
    axisLine: {
        lineStyle: {
            color: '#fff'
        }
    },
    data:[1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
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
      name: '总人口数',
      type: 'line',
      smooth: false,
      symbol: 'o',
      areaStyle: {},
      data: data1
    }
  ]
};

option && myChart.setOption(option);
