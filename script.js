document.addEventListener("DOMContentLoaded", function () {
  let numRows, numCols; // Declare variables for both rows and columns

  const gridMaking = document.querySelector(".input-grid");
  gridMaking.addEventListener("click", function () {
    numRows = prompt("Input the number of rows");
    numCols = prompt("Input the number of columns");

    // Validate user input (check if they are valid numbers)
    if (isValidInput(numRows) && isValidInput(numCols)) {
      createGrid(numRows, numCols); // Call the createGrid function with user input
    } else {
      alert("Please enter valid numbers for rows and columns.");
    }
  });

  function isValidInput(value) {
    return !isNaN(value) && value > 0; // Check if the input is a number greater than 0
  }

  function createGrid(rows, cols) {
    const gridContainer = document.querySelector(".grid-container");

    // Clear previous grid items
    gridContainer.innerHTML = "";

    // Create grid
    if (rows < 100 && cols < 100) {
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const gridItem = document.createElement("div");
          gridItem.classList.add("grid-item");
          gridContainer.appendChild(gridItem);

          // Set color for hover over grids
          gridItem.addEventListener("mouseover", function () {
            gridItem.style.backgroundColor = "lightblue";
          });

          // Reset grid color
          gridItem.addEventListener("mouseout", function () {
            gridItem.style.backgroundColor = "";
          });
        }
      }
    } else {
      alert("Enter numbers below 100");
    }
  }
});
