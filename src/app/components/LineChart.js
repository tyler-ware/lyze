import React, { Component } from 'react'
import './LineChart.css'
import { scaleLinear } from 'd3-scale'
import { max, range } from 'd3-array'
import { select } from 'd3-selection'
import { line, curveMonotoneX } from 'd3-shape'
import { axisBottom, axisLeft } from 'd3-axis'
import { randomUniform } from 'd3-random'

class LineChart extends Component {
   constructor(props){
      super(props)
      this.createLineChart = this.createLineChart.bind(this)
   }

   componentDidMount() {
      this.createLineChart()
  }

   componentDidUpdate() {
      this.createLineChart()
   }

   createLineChart() {
      const node = this.node
      const data = this.props.data;

      var margin = {top: 50, right: 50, bottom: 50, left: 50}
        , width = window.innerWidth - margin.left - margin.right // Use the window's width 
        , height = window.innerHeight - margin.top - margin.bottom; // Use the window's height

      
      var xMin = 0, 
       xMax = 0, 
       yMin = 0, 
       yMax = 0;

      data.forEach(function ({x,y}) {
        if (x < xMin) {
          xMin = x;
        } else if (x > xMax) {
          xMax = x;
        }

        if (y < yMin) {
          yMin = y;
        } else if (y > yMax) {
          yMax = y;
        }
      }); 


      // 5. X scale will use the index of our data
      var xScale = scaleLinear()
        .domain([xMin, xMax]) // input
        .range([0, width]); // output

      // 6. Y scale will use the randomly generate number 
      var yScale = scaleLinear()
        .domain([yMin, yMax]) // input 
        .range([height, 0]); // output 

      // 7. d3's line generator
      var plotted_line = line()
          .x(function(d) { return xScale(d.x); }) // set the x values for the line generator
          .y(function(d) { return yScale(d.y); }) // set the y values for the line generator 
          .curve(curveMonotoneX) // apply smoothing to the line

      // 1. Add the SVG to the page and employ #2
      var svg = select(node)
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // 3. Call the x axis in a group tag
      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(axisBottom(xScale)); // Create an axis component with d3.axisBottom

      // 4. Call the y axis in a group tag
      svg.append("g")
          .attr("class", "y axis")
          .call(axisLeft(yScale)); // Create an axis component with d3.axisLeft

      // 9. Append the path, bind the data, and call the line generator 
      svg.append("path")
          .datum(data) // 10. Binds data to the line 
          .attr("class", "line") // Assign a class for styling 
          .attr("d", plotted_line); // 11. Calls the line generator 

      // 12. Appends a circle for each datapoint 
      svg.selectAll(".dot")
          .data(data)
        .enter().append("circle") // Uses the enter().append() method
          .attr("class", "dot") // Assign a class for styling
          .attr("cx", function(d) { return xScale(d.x) })
          .attr("cy", function(d) { return yScale(d.y) })
          .attr("r", 5)
            .on("mouseover", function(a, b, c) { 
              this.attr('class', 'focus')
          })
            .on("mouseout", function() {  })
   }

render() {
      return <svg ref={node => this.node = node}
      width={500} height={500}>
      </svg>
   }
}
export default LineChart
