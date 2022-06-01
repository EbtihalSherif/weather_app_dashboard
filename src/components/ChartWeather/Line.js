import React from 'react'
import * as d3 from "d3";

const Line = ({ scales, data}) => {
    const { xScale, yScale} = scales;
    const line = d3.line()
        .x((d) => xScale(d.time))
        .y((d) => yScale(d.tempC))
        .curve(d3.curveMonotoneX);


    const path =
        <path d={line(data)}
            stroke="#1a4dc4"
            strokeWidth="3px"
            fill="none"
        />
    return (
        <g>{path}</g>
    )
}

export default  Line;