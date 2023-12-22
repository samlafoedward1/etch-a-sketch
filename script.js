"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.querySelector(".grid-container");

  // Create 16x16 grid items
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridContainer.appendChild(gridItem);

      //setting color for hover over grids
      gridItem.addEventListener("mouseover", function () {
        gridItem.style.backgroundColor = " lightblue";
      });

      //reset grid color
      gridItem.addEventListener("mouseout", function () {
        gridItem.style.backgroundColor = "";
      });
    }
  }
});
