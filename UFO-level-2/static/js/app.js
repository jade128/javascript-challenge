// from data.js
var tData = data;

// get a reference to the table body
var tbody = d3.select("tbody");


// define a function for fill table body
function tableBody(data){
    
    tbody.html("");
    // loop through data and each data row object
    data.forEach((dataRow) => {
        // create a new tr element for tbody
        var row = tbody.append("tr");
      
        Object.entries(dataRow).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    })

}


// create event submit
d3.select("#submit").on("click", handleSubmit);

// complete the submit event handler
function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the date input value 
    var date = d3.select("#datetime").node().value;

    
    // Select the city input value
    var city = d3.select("#city").node().value;


    // Select the state input value 
    var state = d3.select("#state").node().value;
  

    // Select the country input value 
    var country = d3.select("#country").node().value;
 

    // Select the shape input value
    var shape = d3.select("#shape").node().value;


    // Create an array to store the filtered data
    var filteredData = tData;

    // Start filtering the data using the filter inputs
    // Check to see if a date was entered
    if (date) {
        // Filter the data if there was a date input
        filteredData = filteredData.filter(sighting => sighting.datetime === date);
    };
   
    // Check to see if a city was entered
    if (city) {
        // Filter the data if there was a city input
        filteredData = filteredData.filter(sighting => sighting.city === city);
    };

     // Check to see if a state was entered
     if (state) {
        // Filter the data if there was a state input
        filteredData = filteredData.filter(sighting => sighting.state === state);
    };

    // Check to see if a country was entered
    if (country) {
        // Filter the data if there was a country input
        filteredData = filteredData.filter(sighting => sighting.country === country);
    };

    // Check to see if a shape was entered
    if (shape) {
        // Filter the data if there was a shape input
        filteredData = filteredData.filter(sighting => sighting.shape === shape);
    };

    tableBody(filteredData);


};


tableBody(tData);