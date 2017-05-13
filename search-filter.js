The HTML
<!-- Search box -->
    <input type="text" placeholder="Search" id="search">

    <!-- Search results displayed inside these style tags !-->
    <style id="search-results"></style>
    
    <!-- Sample data -->
    <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
      <tr class="searchable" data-index="jon snow">
        <td>Jon</td>
        <td>Snow</td>
      </tr>
      <tr class="searchable" data-index="james bond">
        <td>James</td>
        <td>Bond</td>
      </tr>
      <tr class="searchable" data-index="shawn the sheep">
        <td>Shawn</td>
        <td>The Sheep</td>
      </tr>
      <tr class="searchable" data-index="yo yo ma">
        <td>Yo Yo</td>
        <td>Ma</td>
      </tr>
    </table>
  </div>
  
  //The JavaScript
  // define variable
var searchResults = document.getElementById("search-results");
var searchBox = document.getElementById("search");

// add even listener to the search box
searchBox.addEventListener("input", function() {
  // if no results found, search results are empty
  if (!this.value) {
    searchResults.innerHTML = "No results";
    return;
  }

  // if characters typed in search box don't match any data-index, hide with display: none
  searchResults.innerHTML =
    '.searchable:not([data-index*="' +
    this.value.toLowerCase() +
    '"]) { display: none; }';
});

//The scss
* {
  box-sizing: border-box;
}
div.container {
  width: 300px;
  margin: 30px auto;
  input {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid;
    border-radius: 5px;
  }
  table {
    width: 100%;
    border: 1px solid;
    border-collapse: collapse;
    tr:nth-of-type(odd) {
      background: #ddd;
    }
    th {
      padding: 5px 0;
      border-bottom: 1px solid;
    }
    td {
      padding: 5px 0;
      text-align: center;
    }
  }
}
