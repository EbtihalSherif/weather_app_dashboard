import React, { useEffect, useState, useRef, useLayoutEffect, useCallback } from "react";
import * as d3 from "d3";
import { useSelector, useDispatch } from 'react-redux'
import "./chartWeather.css";

import Tooltip from './Tooltip'
import Line from './Line'
import Area from './Area'
import XYAxisLineChart from './XYAxisLineChart'
import XYAxisBarChart from "./XYAxisBarChart";
import Bar from "./Bar";


const LineChartGenerator = ({ width, dataDay, selectedDayIndex }) => {



    const margins = {
        top: 50, right: 20, bottom: 50, left: 20
    },views={
        smallView: (width - margins.left - margins.right) / 2,
        largeView: (width - margins.left - margins.right) 
    },

        svgDimensions = {
            width: width<567?views.largeView:views.smallView,
            height: 500 - margins.top - margins.bottom
        };

    const data = dataDay
    // states.dayHourlyRate[selectedDayIndex]
    // console.log(data)
    let i = 0
    let timeIntervals = []
    data.map(day => {
        day.time = i
        timeIntervals.push(i)

        i += 3
    }
    )
    //setChartdata(data)


    const xScaleMinValue = Math.min(...data.map(d => d.time));
    const xScaleMaxValue = Math.max(...data.map(d => d.time));
    const yScaleMaxValue = Math.max(...data.map(d => d.tempC));

    const xScale = d3.scaleLinear()
        .domain([xScaleMinValue, xScaleMaxValue])
        .range([margins.left, svgDimensions.width - margins.right])
        .clamp(true);



    const yScale = d3.scaleLinear()
        .domain([0, yScaleMaxValue + 5])
        .range([svgDimensions.height - margins.top, margins.bottom])
        .clamp(true);


    var text = (
        <text className="" transform="translate(20,20)rotate(0)" fontSize="13"> temperature Hourly Rate </text>
    )
    var rectOverlay = <rect transform={`translate(${margins.left / 2},${margins.top / 2})`} className="rectOverlayLineChart" width={svgDimensions.width - margins.right
    } height={svgDimensions.height - margins.top
    } rx="5" ry="5" />


    return (
        <svg className="lineChartSvg" width={svgDimensions.width} height={svgDimensions.height}>
            {text}
            {rectOverlay}
            <XYAxisLineChart scales={{ xScale, yScale }}
                margins={margins} svgDimensions={svgDimensions} data={data} />
            <Line scales={
                {
                    xScale, yScale
                }
            } data={data} />
            <Area scales={{ xScale, yScale }} data={data} svgDimensions={svgDimensions} margins={margins} />
            <Tooltip svgDimensions={svgDimensions} margins={margins} scales={
                {
                    xScale, yScale
                }
            } data={data} />
        </svg>);
}

export default LineChartGenerator;