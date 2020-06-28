import echarts from 'echarts'
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
  // title: {
  //   text: 'ECharts 入门示例'
  // },
  tooltip: {},
  legend: {
    data:['bug数量']
  },
  xAxis: {
    data: ["小明","小红","方方","小圆","倩倩"]
  },
  yAxis: {},
  series: [{
    name: 'bug数量',
    type: 'bar',
    data: [5, 20, 36, 10, 8]
  }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
