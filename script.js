var itemNameInput = document.getElementById("item-name-input");
var itemPriceInput = document.getElementById("item-price-input");
var data = document.getElementById("data");
const add = document.getElementById("add"); 

const total = document.getElementById("total")
let t = 0

add.addEventListener("click", (e) => {
  e.preventDefault();
  
  // Get the values from the input fields
  var itemName = itemNameInput.value;
  var itemPrice = itemPriceInput.value;
  t+=Number(itemPrice);

  // Create a new row (table row) to hold the data
  var newRow = document.createElement("tr");

  // Create two table data (td) elements for the name and price
  var nameCell = document.createElement("td");
  nameCell.textContent = itemName; // Set the text content of the cell to the item name
  
  var priceCell = document.createElement("td");
  priceCell.textContent = itemPrice; // Set the text content of the cell to the item price

  // Append the name and price cells to the new row
  newRow.appendChild(nameCell);
  newRow.appendChild(priceCell);
  
  // Append the new row to the "data" table
  data.appendChild(newRow);
  total.innerText=t
  // Clear the input fields
  itemNameInput.value = "";
  itemPriceInput.value = "";
});
