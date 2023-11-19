// Chart.js
import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

function Chart({ data }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const chartRef = useRef(null);

  const handleBarClick = (event, d) => {
    setSelectedCategory(d.feature);
  };

  useEffect(() => {
    if (!data) {
      return; // Return early if data is not defined
    }

    // D3 Code for Bar Chart
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3.select(chartRef.current);

    svg.selectAll('*').remove();

    const x = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d) => d.feature))
      .padding(0.1);

    const y = d3.scaleLinear().range([height, 0]).domain([0, d3.max(data, (d) => d.timeSpent)]);

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => x(d.feature))
      .attr('y', (d) => y(d.timeSpent))
      .attr('width', x.bandwidth())
      .attr('height', (d) => height - y(d.timeSpent))
      .attr('fill', '#8884d8')
      .on('click', handleBarClick);

    // D3 Code for Line Chart
    if (selectedCategory) {
      const lineChartSvg = svg
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      const line = d3
        .line()
        .x((d) => x(d.feature) + x.bandwidth() / 2)
        .y((d) => y(d[selectedCategory]));

      lineChartSvg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 2)
        .attr('d', line);
    }
  }, [data, selectedCategory]);

  return <svg ref={chartRef} width={500} height={300}></svg>;
}

export default Chart;
