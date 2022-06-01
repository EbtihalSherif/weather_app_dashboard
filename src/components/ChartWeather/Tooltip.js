import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";



const Tooltip = (props) => {


    const [time, setTime] = useState('')
    // const [tooltip, setTooltip] = useState(null)
    //const [overlay, setOverlay] = useState(null)


    const { svgDimensions, scales, margins, data } = props;
    const { xScale, yScale } = scales;
    let bisectMouseValue = d3.bisector((d) => d.time).left;
    let mouseValue, d0, d1, i, d;
    const translateX = xScale(data[1].time), translateY = yScale(data[1].tempC);
   
    let tooltip =
        <g
            className="lineChartTooltip"
            transform={`translate(${translateX},${translateY})`}>
            <line
                className="tooltipHoverLine"
                y1="0"
                y2={svgDimensions.height - translateY - margins.bottom}
                stroke="#020a1f"
                strokeWidth="1px"
                strokeDasharray="5" />
            <circle r="6px" stroke="#020a1f" strokeWidth="3px" fill="#333333" />
            <text x="-10" y="-10" fontSize="12px">{data[1].tempC}</text>
        </g>
    // setTooltip(tooltip)
    let overlay = (<rect
        transform={`translate(${margins.left},${margins.top})`}
        className="lineChartOverlay"
        width={svgDimensions.width - margins.left - margins.right}
        height={svgDimensions.height - margins.top - margins.bottom}
        opacity="0"

        onMouseMove={(event) => {
            mouseValue = xScale.invert(event.nativeEvent.offsetX);
            i = bisectMouseValue(data, mouseValue, 1, data.length-1);
            d0 = data[i - 1];
            d1 = data[i];
            d = (mouseValue - d0.time) < (d1.time - mouseValue) ? d0 : d1;
            d3.select(".lineChartTooltip").attr("transform",
                "translate(" + xScale(d.time) + "," + yScale(d.tempC) + ")");
            d3.select(".lineChartTooltip line").attr("y2", svgDimensions.height - yScale(d.tempC) - margins.bottom);
            d3.select(".lineChartTooltip text").text(d.tempC)
            setTime(d.time)

        }
        }
        onMouseOut={() => {
            d3.select(".lineChartTooltip").attr("transform",
                "translate(" + translateX + "," + translateY + ")");
            d3.select(".lineChartTooltip line").attr("y2", svgDimensions.height - translateY - margins.bottom)
            d3.select(".lineChartTooltip text").text(data[2].tempC)

            setTime(xScale.invert(translateX))


        }
        }
    />)
    // setOverlay(overlay)



    return <g>{overlay}{tooltip}</g>;



}




export default Tooltip;