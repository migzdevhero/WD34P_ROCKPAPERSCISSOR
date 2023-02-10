
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const resetBtn = document.querySelector("#resetBtn");
const gameCounterText = document.querySelector(".gameCounterText");
const modalBody = document.querySelector(".modal-body");
let player;
let computer;
let result;
let counter;
let playerScore = 0;
let computerScore = 0;
let gameCounter = 0;
let gameHistory = [];

choiceBtns.forEach(button => button.addEventListener("click", () => {
  player = button.getAttribute('alt');
  computerChoice();
  playerText.textContent = `${player}`;
  computerText.textContent = `${computer}`;
  resultText.textContent = checkWinner();
  playerScoreText.textContent = `Score: ${playerScore}`;
  computerScoreText.textContent = `Score: ${computerScore}`;
  gameCounter++;
  gameCounterText.textContent = `${gameCounter}`;
  gameHistory.push({gameCounter, player, computer, result: checkWinner()});
  modalBody.innerHTML = "";
  gameHistory.forEach(history => {
    const historyHTML = `
    <p>Game Counter: ${history.gameCounter} | Player: <span>${history.player}</span> vs Computer: <span>${history.computer}</span> | Result: <span>${history.result}</span></p>
    `;    
    modalBody.innerHTML += historyHTML;
  });
  
}));

  function computerChoice() {
  const options = ["ROCK", "PAPER", "SCISSORS"];
  const randomIndex = Math.floor(Math.random() * 3);
  computer = options[randomIndex];
  };


function checkWinner(){
  if(player == computer){
    return "Draw!";
  }
  else if(computer == "ROCK"){
    if(player == "PAPER") {
      playerScore++;
      return "You Win!";
    } else {
      computerScore++;
      return "You Lose!";
    }
  }
  else if(computer == "PAPER"){
    if(player == "SCISSORS") {
      playerScore++;
      return "You Win!";
    } else {
      computerScore++;
      return "You Lose!";
    }
  }
  else if(computer == "SCISSORS"){
    if(player == "ROCK") {
      playerScore++;
      return "You Win!";
    } else {
      computerScore++;
      return "You Lose!";
    }
  }
}

resetBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    gameCounter = 0;
    gameHistory = [];
    playerScoreText.textContent = `Score: 0`;
    computerScoreText.textContent = `Score: 0`;
    gameCounterText.textContent = `0`;
    modalBody.innerHTML = "";
    playerText.textContent = "";
    computerText.textContent = "";
    resultText.textContent = "Welcome to Rock, Paper, Scissors Game!";
  });
  
