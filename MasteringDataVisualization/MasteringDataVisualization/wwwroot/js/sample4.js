/* D3 max function */

var svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", 400)
    .attr("height", 400);

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
            return d.height;
        })])
        .range([0, 400]);

    var rects = svg.selectAll("rect")
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