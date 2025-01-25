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

function getGrid() {
  const grid = document.querySelector("#container");
  for (let i = 0; i < 16; i++) {
    const square = createSquare();
    grid.appendChild(square);
  }
  return grid;
}

const grid = getGrid();
