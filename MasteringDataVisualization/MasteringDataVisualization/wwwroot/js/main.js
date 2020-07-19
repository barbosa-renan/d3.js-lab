/*
*    main.js
*    Mastering Data Visualization with D3.js
*/

var svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", 900)
    .attr("heigth", 900);

var circle = svg.append("circle")
    .attr("cx", 100)
    .attr("cy", 100)
    .attr("r", 50)
    .attr("fill", "blue");

var rect = svg.append("rect")
    .attr("x", 200)
    .attr("y", 50)
    .attr("width", 100)
    .attr("height", 100)
    .attr("fill", "red");

var line = svg.append("line")
    .attr("x1", 350)
    .attr("y1", 50)
    .attr("x2", 500)
    .attr("y2", 200)
    .attr("stroke-widt", 2)
    .attr("stroke", "black");

var elipse = svg.append("ellipse")
    .attr("cx", 550)
    .attr("cy", 100)
    .attr("rx", 80)
    .attr("ry", 30)
    .attr("fill", "green");