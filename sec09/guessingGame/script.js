// create secretNumber
var secretNumber = Math.floor((Math.random() * 100) + 1);
console.log(secretNumber);

// ask user for guess
var guess = Number(prompt("Guess a number between 1 & 100"));


// check guess
while (guess !== secretNumber) {
  if (guess > secretNumber) {
    guess = Number(prompt("Wrong, lower."));
  } else {
    guess = Number(prompt("Wrong, higher."));
  }
}

alert("Correct");
// if (guess == secretNumber) {
//   alert("You guessed the number!!");
// } else {
//   alert("Wrong, try again");
// }
