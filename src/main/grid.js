// creating grid

const Grid = document.getElementById("table");

const createGrid = (row, column) => {
  for (let i = 0; i < row; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < column; j++) {
      let box = document.createElement("td");
      box.classList.add("unvisited");
      box.setAttribute("id", `${i}-${j}`);
      row.appendChild(box);
    }
    Grid.appendChild(row);
  }
};

createGrid(
  Math.floor(window.screen.availHeight * 0.028),
  Math.floor(window.screen.availWidth * 0.0385)
);
