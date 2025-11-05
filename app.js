let compChoice;
function getComputerChoice() {
  compChoice = Math.floor(Math.random() * 3) + 1;
  switch (compChoice) {
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

console.log(getComputerChoice());
