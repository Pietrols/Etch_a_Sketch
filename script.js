//constants
const grid_size = 16; //default grid size
const container_size = 800; // size of the grid container in pixels

//select elements
const container = document.querySelector(".container");
const colorSelect = document.querySelector("#color-select");
const randomButton = document.querySelector(".random");
const eraseButton = document.querySelector(".erase");
const clearButton = document.querySelector(".clear");

//variables
let currentColor = "blue"; //default color
let isMouseDown = false; // track mouse state for drawing

//function to create the grid
function createGrid(size) {
  container.innerHTML = ""; //clear the existing grid

  //calculate the size of each grid item
  const itemSize = container_size / size;

  //create the grid items
  for (i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("gridItem");
    gridItem.style.width = `${itemSize}px`;
    gridItem.style.height = `${itemSize}px`;
    container.appendChild(gridItem);
  }
}

//function to change the color of a grid item
function changeColor(event) {
  if (event.target.classList.contains("gridItem")) {
    event.target.style.background = currentColor;
  }
}

//add event listeners for drawing
container.addEventListener("mousedown", (event) => {
  isMouseDown = true;
  changeColor(event);
});
container.addEventListener("mouseup", (event) => {
  isMouseDown = false;
});
container.addEventListener("mouseover", (event) => {
  if (isMouseDown) {
    changeColor(event);
  }
});

//select button: change color based on dropdown selection
colorSelect.addEventListener("change", (event) => {
  currentColor = event.target.value;
});

//erase button: erase individual blocks on click
eraseButton.addEventListener("click", () => {
  currentColor = "whitesmoke"; //set color to default (erase)
});

//random button: generate a random color
randomButton.addEventListener("click", () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  currentColor = randomColor;
});

//clear button: clear the entire grid
clearButton.addEventListener("click", () => {
  const gridItems = document.querySelectorAll(".gridItem");
  gridItems.forEach((item) => {
    item.style.backgroundColor = "whitesmoke";
  });
});

//initialize the grid
createGrid(grid_size);
