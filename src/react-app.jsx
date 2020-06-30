import React, {useState} from "react";
import {ReactEcharts} from "./react-echarts";

export function ReactApp() {
//options初始化
  const [option ,setOption] = useState({
    title: {
      show: true,
      text: '销量',
      right: 20,
    },

    legend: {
      data: ['金额']
    },
    xAxis: {
      type: 'category',
      data: ['2020-1-1','2020-1-2']
    },
    yAxis: {
      type: 'value'
    },
    tooltip: {
      show: true
    },
    series: [{
      lineStyle: {
        color: 'lightgreen'
      },
      name: '金额',
      data: [1,2],
      type: 'line'
    }]
  })

  const onClick = ()=>{
    setTimeout(()=>{
      setOption(
        {
          // 只需要传你要改的哪两个key(这里为xAxis和series),但是数据包含之前的
          xAxis: {
            // type: 'category',
            data: ['2020-1-1','2020-1-2','2020-1-3']
          },
          series: [
            {
              data: [1,2,3]
            }
          ]
        }
      )
    },1000)


  }
  return(
    <div>
      <h1>我来在react里面使用 Echarts</h1>
      {/*将option传给echarts*/}
      <ReactEcharts option={option}/>
      {/*更改options*/}
      <button onClick={onClick} >点击加载更多</button>
    </div>

  )
}