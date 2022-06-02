import * as d3 from "d3";
import "./chartWeather.css";


import XYAxisBarChart from "./XYAxisBarChart";
import Bar from "./Bar";

const BarChartComponent = ({ width, dataDay, selectedDayIndex }) => {


    const margins = {
        top: 50, right: 40, bottom: 50, left: 20
    }, views = {
        smallView: (width - margins.left - margins.right) / 2,
        largeView: (width - margins.left - margins.right)
    },

        svgDimensions = {
            width: width < 567 ? views.largeView : views.smallView,
            height: 500 - margins.top - margins.bottom
        };


    const data = dataDay
    // states.dayHourlyRate[selectedDayIndex]
    // console.log(data)

    const yMaxValue = Math.max(...data.map(d => d.humidity));


    const xScale = d3.scaleBand()
        .domain(data.map(d => d.time))
        .range([margins.left, svgDimensions.width - margins.right
        ])
        .padding(0.2);

    const xScaleMonth = d3.scaleBand()
        .domain(data.map((d) => d.time))
        .range([margins.left, svgDimensions.width - margins.right
        ])

    const yScale = d3.scaleLinear()
        .domain([
            0, yMaxValue
        ])
        .range([svgDimensions.height - margins.bottom, margins.top
        ])
    const text = (
        <text transform="translate(20,20)rotate(0)" fontSize="13">Humidity</text>
    )
    const rectOverlay = <rect transform={`translate(${margins.left / 2},${margins.top / 2})`}
        className="rectOverlayBarChart" width={svgDimensions.width - margins.right
        } height={svgDimensions.height - margins.top} rx="5" ry="5" />


    return (<svg width={svgDimensions.width} height={svgDimensions.height}>
        {rectOverlay}{text}
        <XYAxisBarChart scales={
            {
                xScaleMonth, yScale
            }
        } margins={margins} svgDimensions={svgDimensions} />
        <Bar scales={
            {
                xScale, yScale
            }
        } margins={margins} svgDimensions={svgDimensions} data={data} yMaxValue={yMaxValue} />
    </svg>);
}

export default BarChartComponent;