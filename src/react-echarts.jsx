import React, {useEffect, useRef} from "react";
import echarts from "echarts"

export function ReactEcharts() {
  //怎么获取div,初始值为null
  const container = useRef(null)

// 第一次点击进来渲染图表
  useEffect(()=>{
    // 获取div的值,用current
    console.log(container.current);

  },[])
  return(
    <div ref={container}>
      hi
    </div>
  )
}