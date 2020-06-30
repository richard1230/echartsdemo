import React, {useEffect, useRef} from "react";
import echarts from "echarts"

export function ReactEcharts(props) {
  //接受option传过来的数据
  const {option} = props
  //怎么获取div,初始值为null
  const container = useRef(null)
  const chart = useRef(null)
// 第一次点击进来渲染图表
  useEffect(()=>{
    // 获取div的值,用current
    console.log(container.current);
    //初始化return里面的
    const width = document.documentElement.clientWidth
    container.current.style.width = `${width - 20}px`
    container.current.style.height = `${(width - 20) * 1.2}px`
    chart.current= echarts.init(container.current,'dark')

  },[])

  //怎么传option,在option变化的时候,将option传到current
  useEffect(()=>{
    chart.current.setOption(option)
  },[option])

  return(
    <div ref={container}/>

  )
}