import React, { useEffect, useState, useRef, useLayoutEffect, useCallback } from "react";
import * as d3 from "d3";
import { useSelector, useDispatch } from 'react-redux'
import "./chartWeather.css";

import BarChartComponent from "./BarChartComponent";
import LineChartGenerator from "./LineChartGenerator";

export default function ChartWeather({ selectedDayIndex, dataDay }) {


  const svgContainer = useRef(null); // The PARENT of the SVG 

  const states = useSelector((state) => state.Reducer)
  // Maximum data value


  const [width, setWidth] = useState(1100);
  const [height, setHeight] = useState(500);


  const getSvgContainerSize = () => {
    const newWidth = svgContainer.current.clientWidth;
  
        setWidth(newWidth);
    const newHeight = svgContainer.current.clientHeight;
    setHeight(newHeight);
};

  useLayoutEffect(() => {
    // detect 'width' and 'height' on render
    getSvgContainerSize();
    // listen for resize changes, and detect dimensions again when they change
    window.addEventListener("resize", getSvgContainerSize);
    // cleanup event listener
    return () => window.removeEventListener("resize", getSvgContainerSize);
  }, []);
 

  return (
    <div>
      <div className="heading">Today's Dashboard</div>
      <div ref={svgContainer} className="chartContainer">
        <div className="lineChart">
          {dataDay && <LineChartGenerator width={width} dataDay={dataDay[selectedDayIndex]}/>}
        </div>

        <div className="barChart">
          {dataDay && <BarChartComponent width={width} dataDay={dataDay[selectedDayIndex]}/>}
        </div>
      </div>


    </div>
  )
}
