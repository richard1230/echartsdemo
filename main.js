import echarts from 'echarts'
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));


const option = {
  legend: {
    data:['bug数量']
  },
  xAxis: {
    type: 'category',
    data: ['1', '2', '3', '4', '5', '6']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    name: 'bug数量',
    data: [820, 932, 901, 934, 1290, 1330],
    type: 'line'
  }]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
