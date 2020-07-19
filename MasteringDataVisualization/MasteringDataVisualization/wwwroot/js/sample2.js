d3.json("data/buildings.json").then(function(data) {

    var svg = d3.select("#chart-area")
        .append("svg")
        .attr("width", 900)
        .attr("height", 900);

    var rects = svg.selectAll("rect")
        .data(data);

    rects.enter()
        .append("rect")
        .attr("x", function(d, i) {
            return (i * 50) + 25;
        })
        .attr("y", 25)
        .attr("height", function(d) {
            return d.height;
        })
        .attr("width", 25)
        .attr("fill", "grey");
});