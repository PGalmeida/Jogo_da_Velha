const cells = document.querySelectorAll("td");
const resetButton = document.querySelector("#reset");
let currentPlayer = "X";
let gameEnd = false;

function handleCellClick() {
  if (gameEnd || this.textContent !== "") {
    return;
  }
  this.textContent = currentPlayer;
  if (checkWin()) {
    alert(`${currentPlayer} ganhou!`);
    gameEnd = true;
    return;
  }
  if (checkTie()) {
    alert("Empate!");
    gameEnd = true;
    return;
  }
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function handleResetClick() {
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  currentPlayer = "X";
  gameEnd = false;
}

function checkWin() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent &&
      cells[a].textContent !== ""
    ) {
      return true;
    }
  }
  return false;
}

function checkTie() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      return false;
    }
  }
  return true;
}

cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

resetButton.addEventListener("click", handleResetClick);
