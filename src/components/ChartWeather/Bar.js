import React, { useEffect, useRef } from 'react'
import * as d3 from "d3";


const Bar = (props) => {

    let node = useRef(null);
  
    let colorScale = d3.scaleLinear()
        .domain([0, props.yMaxValue]).range(['#404e6b', '#142854']);

  

    useEffect(() => {
        const { scales, margins, svgDimensions, data
        } = props;
        const { xScale, yScale
        } = scales;
        const { height
        } = svgDimensions;

        let bar = d3.select(node.current).append("g");

        d3.select(".rect-group").remove();
        bar.attr("class",
            "rect-group")
            .selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d) => xScale(d.time))
            .attr("y", (d) => height - margins.bottom)
            .transition().duration(2500).ease(d3.easeElastic)
            .attr("x", (d) => xScale(d.time))
            .attr("y", (d) => yScale(d.humidity))
            .attr("width", xScale.bandwidth())
            .attr("height", (d) => height - yScale(d.humidity) - margins.bottom)
            .style("fill", (d) => colorScale(d.humidity));

        d3.select(".text-group").remove();
        bar.append("g")
            .attr("class",
                "text-group")
            .selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .attr("x", (d) => xScale(d.time))
            .attr("y", (d) => height - margins.bottom)
            .transition().duration(2500).ease(d3.easeElastic)
            .text((d) => d.humidity)
            .attr("x", (d) => xScale(d.time) + xScale.bandwidth() / 4)
            .attr("y", (d) => yScale(d.humidity) -5)
            .style("fill",
                "#FFFFFF")
            .style("font-size",
                "12px")
    }, [props.scales, props.margins, props.svgDimensions, props.data, props, colorScale])



    const renderBar = () => {
        const { scales, margins, svgDimensions, data } = props;
        const { xScale, yScale } = scales;
        const { height } = svgDimensions;

        let bar = d3.select(node.current).append("g");


        bar.attr("class", "rect-group")
            .selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d) => xScale(d.time))
            .attr("y", height - margins.bottom)
            .transition().duration(1500).ease(d3.easeElastic)
            .attr("x", (d) => xScale(d.time))
            .attr("y", (d) => yScale(d.humidity))
            .attr("width", xScale.bandwidth())
            .attr("height", (d) => height - yScale(d.humidity) - margins.bottom)
            .style("fill", (d) => colorScale(d.humidity))


        bar.attr("class", "text-group")
            .selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .attr("x", (d) => xScale(d.time))
            .attr("y", (d) => height - margins.bottom)
            .transition().duration(1500).ease(d3.easeElastic)
            .text((d) => d.humidity)
            .attr("x", (d) => xScale(d.time) + xScale.bandwidth() / 4)
            .attr("y", (d) => yScale(d.humidity) - 5)
            .style("fill",
                "#142854")
            .style("font-size",
                "12px")
    }

    useEffect(() => {
        if (node.current) {
            renderBar()
        }
    }
        , [])
    return (
        <g ref={node}></g>
    )
}

export default Bar;