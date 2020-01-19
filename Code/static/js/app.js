// from data.js
var tableData = data;

// Making the Table

var tbody = d3.select("tbody");

console.log(data);

function buildTable() {
    data.forEach((UFOreport) => {
        var row = tbody.append("tr");
        Object.entries(UFOreport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

buildTable();

// Filter Functionality

var button = d3.select("#filter-btn");

button.on("click", function() {

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var ufoDate = data.filter(ufo => ufo.datetime === inputValue);

    console.log(ufoDate);

    if (inputValue === "") {
        var table = d3.select("tbody");

        table.html("");

        buildTable();
    } else {
        var table = d3.select("tbody");

        table.html("");

        ufoDate.forEach((ufo) => {
            var row = tbody.append("tr");
            Object.entries(ufo).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }

});