// JavaScript and DOM Manipulation
// by Sergio Guarneros

// from data.js
var tableData = data;

// function to display UFO sightings
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

// create a function to Filter data
function handleClick (){
  d3.event.preventDefault();
  deleteTbody();

  // create a variable with the original data
  var filterData = tableData;

  // filter data with that data that the user inputs and display
  var date = d3.select("#datetime").property("value");
  var city = d3.select("#city").property("value");
  var state = d3.select("#state").property("value");
  var country = d3.select("#country").property("value");
  var shape = d3.select("#shape").property("value");

  if (date.trim() !== "" ) {
    // new table with filtered data
    var filterData = filterData.filter(Sighting => Sighting.datetime === date);
  };

  if (city.trim() !== "" ) {
    var cities = city.toLowerCase();
    // new table with filtered data
    var filterData = filterData.filter(Sighting => Sighting.city === cities);
  };
  
  if (state.trim() !== "" ) {
    var states = state.toLowerCase();
    // new table with filtered data
    var filterData = filterData.filter(Sighting => Sighting.state === states);
  };

  if (country.trim() !== "" ) {
    var countries = country.toLowerCase();
    // new table with filtered data
    var filterData = filterData.filter(Sighting => Sighting.country === countries);
  };
  
  if (shape.trim() !== "" ) {
    var shapes = shape.toLowerCase();
    // new table with filtered data
    var filterData = filterData.filter(Sighting => Sighting.shape === shapes);
  };

  displayData(filterData)

  // display message if no records found
  if (filterData.length == 0) {
    d3.select("tbody")
      .append("tr")
      .append("td")
        .attr("colspan", 7)
        .html("<h4>No Records Found</h4>");
  };

};

// 'Filter Table' button
d3.selectAll("#filter-btn").on("click", handleClick);

// display the new table that was input
displayData(filterData);