let humanScore = 0;
let computerScore = 0;

const choiceBtns = document.querySelectorAll(".btn");
const resultContainer = document.querySelector("#results");

const playerText = document.createElement("p");
const computerText = document.createElement("p");
const resultText = document.createElement("p");
const scoreText = document.createElement("p");

resultContainer.appendChild(playerText);
resultContainer.appendChild(computerText);
resultContainer.appendChild(resultText);
resultContainer.appendChild(scoreText);

choiceBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    playRound(e.target.id);
  });
});

function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      return "Unknown value chosen";
  }
}

function playRound(playerChoice) {
  scoreText.textContent = "";
  let humanChoice = playerChoice;
  let computerChoice = getComputerChoice().toLowerCase();

  playerText.textContent = playerChoice;
  computerText.textContent = computerChoice;

  if (humanChoice === computerChoice) {
    resultText.textContent = "It's a tie!";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    resultText.textContent = "You win!";
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    resultText.textContent = "The computer wins!";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    resultText.textContent = "You win!";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    resultText.textContent = "The computer wins!";
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    resultText.textContent = "You win!";
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    resultText.textContent = "The computer wins!";
    computerScore++;
  } else {
    resultText.textContent = "An error has occured. No winner decided.";
  }

  if (humanScore >= 5 || computerScore >= 5) {
    scoreText.textContent = `The score is ${humanScore}:${computerScore}`;
    humanScore = 0;
    computerScore = 0;
    resultText.textContent =
      humanScore > computerScore ? "You win!" : "The computer wins";
  }
}
