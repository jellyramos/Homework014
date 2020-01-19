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

var button = d3.select("#button");

function myFunction() {
    // Declare variables
    var input, table, tr, td, i, txtValue;
    input = document.getElementById("date");
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(input) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}