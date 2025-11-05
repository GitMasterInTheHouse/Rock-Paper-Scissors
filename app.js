let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice: ");
  return humanChoice;
}

function playRound() {
  let humanChoice = getHumanChoice().toLowerCase();
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

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }

  console.log(`The final score is: ${humanScore}:${computerScore}`);
}

playGame();
