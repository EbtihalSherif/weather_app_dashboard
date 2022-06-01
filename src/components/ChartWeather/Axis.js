import React, { useEffect, useRef } from 'react';

import * as d3 from "d3";

const Axis = (props) => {
    let axisElement = useRef()
   // var axisElement = null

    useEffect(() => {
        renderAxis()
    })


    const renderAxis = () => {
        let axisType = `axis${props.orient}`;
        const axis = d3[axisType]()
            .scale(props.scale)
            .tickSize(-props.tickSize)
            .tickPadding(props.padding)
            .ticks(props.ticks)
            .tickFormat(props.format)

            d3.select(axisElement.current)
            .call(axis)
    }
    return (
        <g className={props.className} ref={ axisElement } transform={props.translate}>
        </g>
    )
}



export default Axis;