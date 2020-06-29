import echarts from 'echarts'

const main = document.getElementById('main');

const loadMoreButton = document.getElementById('loadMore')
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(main,"light");

let n = 0
let m = 0

function createKey() {
  n+= 1
  return `2020-1-${n}`
}

function createValue() {
 m+=1
  return m
}

let xData =[createKey(),createKey(),createKey(),createKey(),createKey(),createKey()]

let values = [createValue(),createValue(),createValue(),createValue(),createValue(),createValue()]
// 使用刚指定的配置项和数据显示图表。
myChart.setOption({
    legend: {
      data:['bug数量']
    },
    xAxis: {
      type: 'category',
      data: xData
    },
    yAxis: {
      type: 'value'
    },
  tooltip:{
      show:true
  },
    series: [{
      lineStyle:{
        color:'lightgreen'
      },
      itemStyle:{
        borderWidth:5
      },
      name: '金额',
      data: values,
      type: 'line'
    }]
  });

loadMoreButton.addEventListener('click',()=>{
  const key = createKey()
  const value = createValue()
  xData = [...xData,key]
  values = [...values,value]
  console.log(key,value);
  myChart.setOption({
    xAxis:{
      data : xData
    },
    series:[
      {
        data:values
      }
    ]
  })
})