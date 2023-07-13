const startButton = document.querySelector(".start-button");
const homePage = document.querySelector(".page.home");
const gamePage = document.querySelector(".page.game");
const restartButton = document.querySelector(".restart-button");
const rescoreButton = document.querySelector(".rescore-button");
const gameTable = document.querySelector(".game-table");
const gameResult = document.querySelector(".game-result");
const scoreCrosses = document.querySelector(".score.crosses");
const scoreNoughts = document.querySelector(".score.noughts");

let currentPlayer = "X";
let gameOver = false;

startButton.addEventListener("click", function () {
  homePage.style.display = "none";
  gamePage.style.display = "flex";
});

function makeMove() {}
