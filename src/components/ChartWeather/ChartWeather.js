import React, {  useState, useRef, useLayoutEffect } from "react";
import "./chartWeather.css";

import BarChartComponent from "./BarChartComponent";
import LineChartGenerator from "./LineChartGenerator";

export default function ChartWeather({ selectedDayIndex, dataDay }) {


  const svgContainer = useRef(null); // The PARENT of the SVG 



  const [width, setWidth] = useState(1100);


  const getSvgContainerSize = () => {
    const newWidth = svgContainer.current.clientWidth;
        setWidth(newWidth);
};

/**
 * to ensure all components are drawn to fetch the correct width
 */

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
