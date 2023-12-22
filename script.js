"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const gridMaking = document.querySelector(".input-grid");
  gridMaking.addEventListener("click", function () {
    const newGrid = prompt("Input grid sides");
  });

  const gridContainer = document.querySelector(".grid-container");

  // Create 16x16 grid items
  for (let i = 0; i < newGrid; i++) {
    for (let j = 0; j < newGrid; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridContainer.appendChild(gridItem);

      //setting color for hover over grids
      gridItem.addEventListener("mouseover", function () {
        gridItem.style.backgroundColor = " lightblue";
      });

      //   reset grid color
      gridItem.addEventListener("mouseout", function () {
        gridItem.style.backgroundColor = "";
      });
    }
  }
});
