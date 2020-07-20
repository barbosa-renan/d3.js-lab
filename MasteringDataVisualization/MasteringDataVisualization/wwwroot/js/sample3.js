var svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", 400)
    .attr("height", 400);

d3.json("data/buildings.json").then(function(data) {

    data.forEach(d => {
        d.height = +d.height;
    });

    var x = d3.scaleBand()
        .domain(["Burj Khalifa", "Shanghai Tower",
            "Abraj Al-Bait Clock Tower",
            "Ping An Finance Centre",
            "Lotte World Tower",
            "One World Trade Center",
            "Guangzhou CTF Finance Center"
        ])
        .range([0, 400])
        .paddingInner(0.2)
        .paddingOuter(0.2);

    var y = d3.scaleLinear()
        .domain([0, 828])
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