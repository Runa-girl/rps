//variables:
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  playRound("rock");
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  playRound("paper");
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  playRound("scissors");
});

//Function declarations:
function random(number) {
    return Math.floor(Math.random()*number);
}

function computerPlay() {
  let selection = ["rock", "paper", "scissors"];
  let computerSelection = random(3);
  return selection [computerSelection];
}

function displayChoice(selection, location) {
    let clear = document.getElementById(location);
    clear.innerHTML = '';
    let itm = document.getElementById(selection);
    let cln = itm.cloneNode(true);
    document.getElementById(location).appendChild(cln);
}

function playRound(playerInput) {
  playerSelection = playerInput;
  computerSelection = computerPlay();
  displayChoice(playerSelection, "player");
  displayChoice(computerSelection, "computer");

  if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
  } else if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "paper") {
  } else {
    computerScore++;
  }
  let playerScoreDisp = document.querySelector('.playerscore');
  playerScoreDisp.textContent = playerScore;

  let computerScoreDisp = document.querySelector('.computerscore');
  computerScoreDisp.textContent = computerScore;
}

