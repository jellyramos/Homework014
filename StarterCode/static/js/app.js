// from data.js
var tableData = data;

// Making the Table

var tbody = d3.select("tbody");

console.log(data);

data.forEach((UFOreport) => {
    var row = tbody.append("tr");
    Object.entries(UFOreport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Filter Functionality

var button = d3.select("#filter-btn");

button.on("click", function() {

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var ufoDate = data.filter(ufo => ufo.datetime === inputValue);

    console.log(ufoDate);
});