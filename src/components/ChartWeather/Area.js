import React from 'react'
import * as d3 from "d3";

 const Area = ({ scales, data, svgDimensions, margins}) => {
    const { xScale, yScale
    } = scales;
    const area = d3.area()
        .x((d) => xScale(d.time))
        .y0(svgDimensions.height - margins.bottom)
        .y1((d) => yScale(d.tempC))
        .curve(d3.curveMonotoneX);

    const areaGradient =
        <linearGradient
            id="area-gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1={yScale(0)}
            x2="0"
            y2={yScale(1000)}
        >
            <stop
                offset="0%"
                stopColor="#333333"
                stopOpacity="0"
            >
            </stop>
            <stop
                offset="100%"
                stopColor="#1a4dc4"
                stopOpacity="0.5"
            >
            </stop>
        </linearGradient>

    const path =
        <path
            d={area(data)
            }
            className="area"
        />
    return (
        <g>{areaGradient }{path}</g>
    )
}

export default Area;