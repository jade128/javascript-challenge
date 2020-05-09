// From data.js
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
// complete the event handler function and function is triggered when the button is clicked
function handleClick(){
   //prevent the page from refreshing
    d3.event.preventDefault();
    //get property value of input element
    var enterDate = d3.select("#datetime").property("value");
    var filteredData = tData;

    if(enterDate) {
        // keep data if date matched
        filteredData = tData.filter((row) => row.datetime === enterDate);
    }
    // fill table with filtered data
    tableBody(filteredData);
}

// create event handler 
d3.selectAll("#filter-btn").on("click", handleClick);

// first full table
tableBody(tData);