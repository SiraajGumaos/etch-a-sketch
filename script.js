const container = document.getElementById("grid-container");
const resizeBtn = document.getElementById("resize-btn");

// Generate grid
function createGrid(squaresPerSide) {
  container.innerHTML = "";

  const squareSize = 960 / squaresPerSide;

  const totalSquares = squaresPerSide * squaresPerSide;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseenter", () => {
      let currentOpacity = parseFloat(square.style.opacity) || 0;

      if (currentOpacity < 1) {
        square.style.opacity = (currentOpacity + 0.1).toFixed(1);
      }
    });

    container.appendChild(square);
  }
}

resizeBtn.addEventListener("click", () => {
  let userInput = prompt(
    "Enter the number of squares per side (Maximum: 100):",
  );

  if (userInput === null) return;

  let size = parseInt(userInput);

  if (isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a valid number between 1 and 100.");
  } else {
    createGrid(size);
  }
});

createGrid(16);
