let humanScore = 0;
let computerScore = 0;

const choiceBtns = document.querySelectorAll(".btn");

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
  let humanChoice = playerChoice;
  let computerChoice = getComputerChoice().toLowerCase();

  console.log(humanChoice);
  console.log(computerChoice);

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win!");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("The computer wins!");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win!");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("The computer wins!");
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win!");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("The computer wins!");
    computerScore++;
  } else {
    console.log("Something went wrong. Winner undecided!");
  }
}
