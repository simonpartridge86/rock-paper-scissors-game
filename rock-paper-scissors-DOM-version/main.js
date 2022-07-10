//creates new div and input field, and appends them to the 'body' element
let body = document.querySelector('body');
let playerNameDisplay = document.querySelector("#welcome-username");
let newInput = document.createElement('input');
let newDiv = document.createElement('div');
newInput.setAttribute('type', 'text');
newInput.setAttribute('placeholder', 'Type name here');
body.appendChild(newDiv);
body.insertBefore(newInput, body.children[2]);

newInput.addEventListener("keyup", addName)

//addName is called by the above event listener on the input field
function addName(){
  let playerName = newInput.value;
  playerNameDisplay.innerText = `Welcome, ${playerName}!`;
}

let playerMove;
let rockButton = document.querySelector("#rock-button");
let paperButton = document.querySelector("#paper-button");
let scissorsButton = document.querySelector("#scissors-button");

//adds event listeners to the three player buttons
rockButton.addEventListener("click", rock);
paperButton.addEventListener("click", paper);
scissorsButton.addEventListener("click", scissors);

//these functions run when the buttons are clicked
function rock(){
  playerMove = "rock";
  gamePlay();
}
function paper(){
  playerMove = "paper";
  gamePlay();
}
function scissors(){
  playerMove = "scissors";
  gamePlay();
}

//initialises scores
let score = {
  gamesPlayed: 0,
  wins: 0,
  draws: 0,
  losses: 0,
};

//getComputerMove selects random computer player move
function getComputerMove() {
  let randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 0.33) {
    return "rock";
  }
  if (randomNumber >= 0.33 && randomNumber < 0.66) {
    return "paper";
  }
  if (randomNumber >= 0.66 && randomNumber < 1) {
    return "scissors";
  }
}

//getWinner returns the appropriate outcome based on player and computer moves
function getWinner(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return 0;
  }
  if (playerMove === "rock") {
    if (computerMove === "paper") {
      return -1;
    } else if (computerMove === "scissors") {
      return 1;
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      return 1;
    } else if (computerMove === "scissors") {
      return -1;
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      return -1;
    } else if (computerMove === "paper") {
      return 1;
    }
  }
}

//displayResult changes the move and result displays based on game inputs and outcome
function displayResult(result, playerMove, computerMove) {
  let resultText = "";
  if (result === 1) {
    resultText = "Win!";
  } else if (result === 0) {
    resultText = "Draw";
  } else if (result === -1) {
    resultText = "Loss :(";
  }
  let playerMoveDisplay = document.querySelector("#your-move");
  let computerMoveDisplay = document.querySelector("#computer-move");
  let resultDisplay = document.querySelector("#result-display");
  playerMoveDisplay.innerText = `Your move: ${playerMove}`;
  computerMoveDisplay.innerText = `Computer move: ${computerMove}`;
  resultDisplay.innerText = `Result: ${resultText}`;
}

//updateScore updates the scores based on game outcome
function updateScore(result) {
  score.gamesPlayed = score.gamesPlayed + 1;
  if (result === 1) {
    score.wins = score.wins + 1;
  } else if (result === 0) {
    score.draws = score.draws + 1;
  } else if (result === -1) {
    score.losses = score.losses + 1;
  }
}

//displayScore displays the updated scores
function displayScore() {
  let winsDisplayed = document.querySelector("#wins");
  let drawsDisplayed = document.querySelector("#drew");
  let lossesDisplayed = document.querySelector("#losses");
  let gamesPlayedDisplay = document.querySelector("#games-played");
  gamesPlayedDisplay.innerText = `Games played: ${score.gamesPlayed}`;
  winsDisplayed.innerText = `Wins: ${score.wins}`;
  drawsDisplayed.innerText = `Drew: ${score.draws}`;
  lossesDisplayed.innerText = `Losses: ${score.losses}`;
}

//gamePlay calls the necessary functions to update the page whenever game is played
//(i.e. when rock, paper, or scissors buttons are clicked)
function gamePlay() {
  let computerMove = getComputerMove();
  let result = getWinner(playerMove, computerMove);
  displayResult(result, playerMove, computerMove);
  updateScore(result);
  displayScore();
}