function search() {
  const query = $("#name")[0].value;
  const nameArray = $("h4.name");
  const phoneArray = $("p.phone");
  const addressArray = $("p.address");

  // search is case insensitive
  const queryLowerCase = query.toLowerCase();
  const nameArrayLowerCase = $.map(nameArray, (x) => x.innerHTML.toLowerCase());

  const indexArray = searchByRecursion(nameArrayLowerCase, queryLowerCase, []);

  // show the number of result
  $(".notify").remove();
  const message = `<span class='notify'><br />${indexArray.length} result(s) found.</span>`;
  $(".grid-container").after(message);

  // display matching contact
  $(".searchResult").remove();
  indexArray.forEach((x) => {
    displayResult(
      nameArray[x].innerHTML,
      phoneArray[x].innerHTML,
      addressArray[x].innerHTML
    );
  });
}

function searchByRecursion(array, query, indexArray) {
  // if the query is none return the indexArray of all elements
  if (query.length == 0) {
    return [...array.keys()];
  }

  // partial search instead of an exact search that can be done much simpler with a hash
  const matchedIndex = array.findIndex((x) => x.includes(query) == true);
  if (matchedIndex != -1) {
    indexArray.push(matchedIndex);
    array[matchedIndex] = "";
    return searchByRecursion(array, query, indexArray);
  } else {
    return indexArray;
  }
}

// display search result
function displayResult(name, phone, address) {
  const contact = `
    <div class="searchResult">
      <hr />
      <h4 class="searchName">${name}</h4>
      <p class="searchPhone">${phone}</p>
      <p class="searchAddress">${address}</p>
    </div>`;

  $("button.search").after(contact);
}
