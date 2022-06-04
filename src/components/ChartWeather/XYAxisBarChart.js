import React from 'react'
import Axis from './Axis'

/**
 * handle x,y axis configs
 * @param {*} param0 
 * @returns 
 */
const XYAxisBarChart = ({ scales, margins, svgDimensions
}) => {
    const xAxisProps = {
        orient: 'Bottom',
        translate: `translate(0,${svgDimensions.height - margins.bottom
            })`,
        scale: scales.xScaleMonth,
        tickSize: svgDimensions.height - margins.top - margins.bottom,
        ticks: 9,
        className: 'axisBottom',
        padding: 10,
        format: null
    }
    const yAxisProps = {
        orient: 'Left',
        translate: `translate(${margins.left
            },
        0)`,
        scale: scales.yScale,
        tickSize: svgDimensions.width - margins.left - margins.right,
        ticks: 5,
        className: 'axisLeft',
        padding: 15,
        format: null
    }

    return <g>
        <Axis {...xAxisProps
        } />
        <Axis {...yAxisProps
        } />
    </g>
}


export default XYAxisBarChart;