// JavaScript and DOM Manipulation
// by Sergio Guarneros

// from data.js
var tableData = data;

// function to display all
function displayData(data) {

  // select tbody
  var tbody = d3.select("tbody");
  data.forEach((item) => {
    var row = tbody.append("tr");
    
    // using Object.entries to get key, value data inside of the table
    // and loop through them to add to the table in html
    Object.entries(item).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.html(value);
    });
  });
};

// clear the table for new data
function deleteTbody() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};

// display all UFO sightings
console.log(tableData);
displayData(tableData);

// 'Filter Table' button
var button = d3.select("#filter-btn");

// filter data with date that the user inputs and display
button.on("click", function(event) {
  d3.event.preventDefault();
  deleteTbody();
  var dateInput = d3.select("#datetime").property("value");
  
  if (dateInput.trim() === "" ) {

    // display the database if the date field has no date
    var filteredData = tableData;
  } else {

    // otherwise, display the filtered dataset  
    var filteredData = tableData.filter(Sighting => 
      Sighting.datetime === dateInput.trim());
  };

  // display a message if no records found
  if (filteredData.length == 0) {
    d3.select("tbody")
      .append("tr")
      .append("td")
        .attr("colspan", 7)
        .html("<h3>No Records Found</h3>");
  };

  // print the value and display the new table that was input
  console.log(filteredData);
  displayData(filteredData);
});