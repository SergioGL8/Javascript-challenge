// from data.js
var tableData = data;

// Select tbody 
tbody = d3.select("tbody")

// Using Object.entries to get the key and value data inside of the table
// and loop through them to add to the table in html
function display(data){ 
    tbody.text("")
    data.forEach(function(sight){
    new_tr = tbody.append("tr")
    Object.entries(sight).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

display(tableData)

// Select the web input and the filter button
var dateInput = d3.select("#datetime")
var button = d3.select("filter-btn")

// Filter data with the date input
function click(){
    // Prevent Default
    d3.event.preventDefault();
    //print the value that was input
    console.log(dateInput.property("value"));
    //create a new table showing only the filterd data
    var new_table = tableData.filter(sight => sight.datetime===dateInput.property("value"))
    //display the new table
    display(new_table);
}

// event listener to handle change and click
dateInput.on("change", click)
