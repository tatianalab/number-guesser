let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Generate a random target number
const generateTarget = () =>{
  const randNumb = Math.floor(Math.random() * 10);
  return randNumb;
}
// console.log(generateTarget());

// Determine who is closes to target
const compareGuesses = (currentHumanGuess, computerGuess, target) =>{
  if (currentHumanGuess - target === computerGuess - target){
    return true;
  }
  if (currentHumanGuess - target < computerGuess - target){
    return true;
  } else {
    return false;
  };
}
// console.log(compareGuesses(10,5,4));

// Increase the user score after each round
const updateScore = (winner) =>{
  if (winner === 'human'){
    humanScore++;
  } else {
    computerScore++;
  }
}
// updateScore('human');
// updateScore('human');
// updateScore('human');
// console.log(humanScore);

// Upate the round number after each round
const advanceRound = () =>{
  currentRoundNumber++;
}

