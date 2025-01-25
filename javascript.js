function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createSquare() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = getRandomColor();
  });
  return square;
}

function createRow(dimension) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let i = 0; i < dimension; i++) {
    const square = createSquare();
    row.appendChild(square);
  }
  return row;
}

function getDimension(amount) {
  const squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
  let dimension = 1;
  for (let i = 0; i < 10; i++) {
    if (squares[i] <= amount) {
      dimension = i + 1;
    }
  }
  return dimension;
}

function getGrid(amount) {
  const dimension = getDimension(amount);
  const grid = document.querySelector("#container");
  for (let i = 0; i < dimension; i++) {
    const row = createRow(dimension);
    grid.appendChild(row);
  }
  return grid;
}

const grid = getGrid(100);
