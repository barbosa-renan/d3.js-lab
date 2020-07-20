/* D3 Axis and labels */

var margin = { left: 100, right: 10, top: 10, bottom: 150 };
var width = 600 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;

var g = d3.select("#chart-area")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," +
        margin.top + ")");

g.append("text")
    .attr("class", "x axis-label")
    .attr("x", width / 2)
    .attr("y", height + 140)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("The world's tallest buildings");

d3.json("data/buildings.json").then(function(data) {

    data.forEach(d => {
        d.height = +d.height;
    });

    var x = d3.scaleBand()
        .domain(data.map(function(d) {
            return d.name;
        }))
        .range([0, 400])
        .paddingInner(0.2)
        .paddingOuter(0.2);

    var y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) {
            return d.height + 150;
        })])
        .range([0, height]);

    var xAxisCall = d3.axisBottom(x);
    g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0, " + height + ")")
        .call(xAxisCall)
        .selectAll("text")
        .attr("y", "10")
        .attr("x", "-5")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-40)");

    var yAxisCall = d3.axisLeft(y)
        .ticks(4)
        .tickFormat(function(d) {
            return d + "m";
        });

    g.append("g")
        .attr("class", "y-axis")
        .call(yAxisCall);


    var rects = g.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function(d, i) {
            return x(d.name);
        })
        .attr("y", 20)
        .attr("height", function(d) {
            return y(d.height);
        })
        .attr("width", x.bandwidth)
        .attr("fill", "grey");
});