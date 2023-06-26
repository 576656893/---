var myChart = echarts.init(document.getElementById('map1'));
var geoCoordMap = {
    '新疆': [86.61 , 40.79],
    '西藏':[89.13 , 30.66],
    '黑龙江':[128.34 , 47.05],
    '吉林':[126.32 , 43.38],
    '辽宁':[123.42 , 41.29],
    '内蒙古':[112.17 , 42.81],
    '北京':[116.40 , 40.40 ],
    '宁夏':[106.27 , 36.76],
    '山西':[111.95,37.65],
    '河北':[115.21 , 38.44],
    '天津':[117.04 , 39.52],
    '青海':[97.07 , 35.62],
    '甘肃':[103.82 , 36.05],
    '山东':[118.01 , 36.37],
    '陕西':[108.94 , 34.46],
    '河南':[113.46 , 34.25],
    '安徽':[117.28 , 31.86],
    '江苏':[120.26 , 32.54],
    '上海':[121.46 , 31.28],
    '四川':[103.36 , 30.65],
    '湖北':[112.29 , 30.98],
    '浙江':[120.15 , 29.28],
    '重庆':[107.51 , 29.63],
    '湖南':[112.08 , 27.79],
    '江西':[115.89 , 27.97],
    '贵州':[106.91 , 26.67],
    '福建':[118.31 , 26.07],
    '云南':[101.71 , 24.84],
    '台湾':[121.01 , 23.54],
    '广西':[108.67 , 23.68],
    '广东':[113.98 , 22.82],
    '海南':[110.03 , 19.33],
    '澳门':[113.54 , 22.19],
    '香港':[114.17 , 22.32],
    };
var BJData = [
    [{name:'北京' }, { name:'北京',value:0 }], 
    [{name:'北京' }, { name:'西藏',value:162 }], 
    [{name:'北京' }, { name:'青海',value:222 }], 
    [{name:'北京' }, { name:'宁夏',value:547 }], 
    [{name:'北京' }, { name:'广西',value:609 }], 
    [{name:'北京' }, { name:'贵州',value:649 }], 
    [{name:'北京' }, { name:'云南',value:703 }], 
    [{name:'北京' }, { name:'江西',value:706 }], 
    [{name:'北京' }, { name:'新疆',value:748 }], 
    [{name:'北京' }, { name:'甘肃',value:759 }], 
    [{name:'北京' }, { name:'黑龙江',value:789 }], 
    [{name:'北京' }, { name:'海南',value:822 }], 
    [{name:'北京' }, { name:'吉林',value:919 }], 
    [{name:'北京' }, { name:'重庆',value:969 }], 
    [{name:'北京' }, { name:'湖南',value:1017 }], 
    [{name:'北京' }, { name:'福建',value:1177 }], 
    [{name:'北京' }, { name:'山西',value:1713 }], 
    [{name:'北京' }, { name:'内蒙古',value:1733 }], 
    [{name:'北京' }, { name:'湖北',value:1927 }], 
    [{name:'北京' }, { name:'陕西',value:1980 }], 
    [{name:'北京' }, { name:'河南',value:2037 }], 
    [{name:'北京' }, { name:'辽宁',value:2103 }], 
    [{name:'北京' }, { name:'安徽',value:2139 }], 
    [{name:'北京' }, { name:'四川',value:2706 }], 
    [{name:'北京' }, { name:'江苏',value:2795 }], 
    [{name:'北京' }, { name:'浙江',value:3048 }], 
    [{name:'北京' }, { name:'山东',value:3268 }], 
    [{name:'北京' }, { name:'上海',value:3781 }], 
    [{name:'北京' }, { name:'天津',value:4836 }], 
    [{name:'北京' }, { name:'广东',value:5923 }], 
    [{name:'北京' }, { name:'河北',value:13861 }], 
];
var SCData = [
    [{name:'四川' }, { name:'四川',value:0 }], 
    [{name:'四川' }, { name:'吉林',value:2470 }], 
    [{name:'四川' }, { name:'宁夏',value:3507 }], 
    [{name:'四川' }, { name:'黑龙江',value:3514 }], 
    [{name:'四川' }, { name:'青海',value:4889 }], 
    [{name:'四川' }, { name:'内蒙古',value:6044 }], 
    [{name:'四川' }, { name:'天津',value:6633 }], 
    [{name:'四川' }, { name:'甘肃',value:8014 }], 
    [{name:'四川' }, { name:'江西',value:8152 }], 
    [{name:'四川' }, { name:'辽宁',value:9374 }], 
    [{name:'四川' }, { name:'广西',value:9552 }], 
    [{name:'四川' }, { name:'山西',value:9615 }], 
    [{name:'四川' }, { name:'湖南',value:10562 }], 
    [{name:'四川' }, { name:'河南',value:10564 }], 
    [{name:'四川' }, { name:'海南',value:10983 }], 
    [{name:'四川' }, { name:'安徽',value:12012 }], 
    [{name:'四川' }, { name:'西藏',value:12954 }], 
    [{name:'四川' }, { name:'陕西',value:18184 }], 
    [{name:'四川' }, { name:'河北',value:18814 }], 
    [{name:'四川' }, { name:'山东',value:19607 }], 
    [{name:'四川' }, { name:'湖北',value:23167 }], 
    [{name:'四川' }, { name:'北京',value:29352 }], 
    [{name:'四川' }, { name:'贵州',value:36002 }], 
    [{name:'四川' }, { name:'云南',value:49094 }], 
    [{name:'四川' }, { name:'上海',value:55422 }], 
    [{name:'四川' }, { name:'江苏',value:76452 }], 
    [{name:'四川' }, { name:'新疆',value:78667 }], 
    [{name:'四川' }, { name:'福建',value:83858 }], 
    [{name:'四川' }, { name:'重庆',value:139749 }], 
    [{name:'四川' }, { name:'浙江',value:159977 }], 
    [{name:'四川' }, { name:'广东',value:303379 }], 
];
var HNData = [
    [{name:'海南' }, { name:'海南',value:0 }], 
    [{name:'海南' }, { name:'西藏',value:26 }], 
    [{name:'海南' }, { name:'青海',value:48 }], 
    [{name:'海南' }, { name:'宁夏',value:89 }], 
    [{name:'海南' }, { name:'内蒙古',value:126 }], 
    [{name:'海南' }, { name:'甘肃',value:186 }], 
    [{name:'海南' }, { name:'黑龙江',value:268 }], 
    [{name:'海南' }, { name:'辽宁',value:354 }], 
    [{name:'海南' }, { name:'山西',value:361 }], 
    [{name:'海南' }, { name:'天津',value:363 }], 
    [{name:'海南' }, { name:'吉林',value:450 }], 
    [{name:'海南' }, { name:'河北',value:494 }], 
    [{name:'海南' }, { name:'新疆',value:499 }], 
    [{name:'海南' }, { name:'陕西',value:505 }], 
    [{name:'海南' }, { name:'安徽',value:514 }], 
    [{name:'海南' }, { name:'贵州',value:532 }], 
    [{name:'海南' }, { name:'云南',value:601 }], 
    [{name:'海南' }, { name:'河南',value:616 }], 
    [{name:'海南' }, { name:'山东',value:723 }], 
    [{name:'海南' }, { name:'重庆',value:794 }], 
    [{name:'海南' }, { name:'江西',value:1112 }], 
    [{name:'海南' }, { name:'北京',value:1227 }], 
    [{name:'海南' }, { name:'四川',value:1315 }], 
    [{name:'海南' }, { name:'江苏',value:1397 }], 
    [{name:'海南' }, { name:'湖北',value:1402 }], 
    [{name:'海南' }, { name:'福建',value:1462 }], 
    [{name:'海南' }, { name:'湖南',value:1497 }], 
    [{name:'海南' }, { name:'浙江',value:1618 }], 
    [{name:'海南' }, { name:'上海',value:1836 }], 
    [{name:'海南' }, { name:'广西',value:1950 }], 
    [{name:'海南' }, { name:'广东',value:27587 }],
];
// 小飞机矢量图
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

// 变量6：用于转换成需要的特定格式数据(结合北上广Data和geoCoordMap进行转换，格式见官网：series.lines.data线数据集格式示例)
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];  // 出发地的经纬度
        var toCoord = geoCoordMap[dataItem[1].name];    // 目的地的经纬度
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord],
                value: dataItem[1].value
            });
        }
    }
    return res;
};

// 变量7：定义了对指定上述城市用SVG画图时线条的颜色
var color = ['#a6c84c', '#ffa022', '#46bee9'];
// 变量8：图表的系列，开发时动态填充1
var series = [];
// 对我们上面定义的空图表系列series进行数据填充
[['北京', BJData],['四川',SCData],['海南',HNData]].forEach(function (item, i) {
    series.push(
    // 两地之间的动态轨迹
    {
        name: item[0],   // 系列的名称
        // lines：用于带有起点和终点信息的线数据的绘制，主要用于路线可视化
        type: 'lines',
        zlevel: 1,              // 画布的权重，权重大的在最上面
        effect: {
            show: true,         // 打开线条特效
            period: 10,          // 特效动画时间，单位s
            trailLength: 0.5,   // 特效尾迹的长度，值越大越长
            color: '#fff',
            symbolSize: 1       // 特效标记的大小
        },
        // 线条的样式
        lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: .2  // 边的曲度，取值0~1，值越大曲度越大
            }
        },
        data: convertData(item[1])  // 对北上广的数据转换成特定格式
    },
    // 两地之间的线条
    {
        name: item[0],
        type: 'lines',
        zlevel: 2,
        effect: {
            show: true,
            period: 10,
            trailLength: 0,
            symbol: planePath,  // 基于SVG矢量图的特效图形标记，用于绘制小飞机的
            symbolSize: 10
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 1,
                opacity: 0.4,   // 图形透明度
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0],
        type: 'effectScatter',      // 带有涟漪特效的散点图，起到视觉突出的效果
        coordinateSystem: 'geo',    // 该系列使用的坐标系指定为地理坐标系
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'     // 波纹的绘制方式
        },
        label: {
            normal: {
                show: true,
                position: 'right',  // 地区名称标签显示位置
                formatter: '{b}'    // 格式化显示标签，b指的是系列的名称
            }
        },
        symbolSize: function (val) {
            // val：[121.4648, 31.2891, 95]
            return 10;      // 目的地涟漪特效的大小
        },
        itemStyle: {
            normal: {
                color: '#ffeb7b'
            }
        },
        // 解析：item[1] ==> BJData：[[{name:'北京'}, {name:'上海',value:95}],...]
        data: item[1].map(function (dataItem) {
            // dataItem ==> [{name:'北京'}, {name:'上海',value:95}]
            return {
                // dataItem[1] ==> {name:'上海',value:95}
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])    // [121.4648, 31.2891, 95]
            };
            // console.log(geoCoordMap[dataItem[1].name].concat([dataItem[1].value]))
        })
    });
});

var option = {
    // Dom背景颜色
    backgroundColor: '',
    title: {
        text: '',
        subtext: '',
        left: 'center',
        textStyle: {
            color: 'black'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'horizontal',
        top: 'bottom',
        left: 'center',
        data: ['北京', '四川','海南'],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single'  // 图例选择的模式：single和multiple分别对应单选和多选
    },
    // geo：地理坐标系组件
    geo: {
        map: 'china',
        label: {
            emphasis: {
                // 鼠标触发显示地区名称
                show: true,
                textStyle: {
                    color: 'grey'
                }
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                // 正常时地区的颜色
                areaColor: '#4c60ff',
                borderColor: '#002097'
            },
            emphasis: {
                // 鼠标经过时地区的颜色
                areaColor: '#293fff',
            }
        }
    },
    series: series	// 调用上面已经填充好的series
};

myChart.setOption(option);