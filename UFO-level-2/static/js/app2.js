// JavaScript and DOM Manipulation
// by Sergio Guarneros

// from data.js
var tableData = data;

// function to display UFO sightings
function displayData(data) {
  var tbody = d3.select("tbody");
  data.forEach((item) => {
    var row = tbody.append("tr");
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
  
// initial display of all UFO sightings
console.log(tableData);
displayData(tableData);

//Create a function to Filter data
function handleClick (){
  d3.event.preventDefault();
  deleteTbody();

  var filterData = tableData;

  var date = d3.select("#datetime").property("value");
  var city = d3.select("#city").property("value");
  var state = d3.select("#state").property("value");
  var country = d3.select("#country").property("value");
  var shape = d3.select("#shape").property("value");

  // Create new variable of the original data
  if (date.trim() !== "" ) {
    // Create new table with filtered data
    var filterData = filterData.filter(Sighting => Sighting.datetime === date);
  };

  if (city.trim() !== "" ) {
      var cities = city.toLowerCase();
      // Create new table with filtered data
      var filterData = filterData.filter(Sighting => Sighting.city === cities);
  };
  
  if (state.trim() !== "" ) {
      var states = state.toLowerCase();
      // Create new table with filtered data
      var filterData = filterData.filter(Sighting => Sighting.state === states);
  };

  if (country.trim() !== "" ) {
      var countries = country.toLowerCase();
      // Create new table with filtered data
      var filterData = filterData.filter(Sighting => Sighting.country === countries);
  };
  
  if (shape.trim() !== "" ) {
      var shapes = shape.toLowerCase();
      // Create new table with filtered data
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
  
  // display the database
  console.log(filterData);
  displayData(filterData);

};

// 'Filter Table' button
d3.selectAll("#filter-btn").on("click", handleClick);
  
displayData(filterData);