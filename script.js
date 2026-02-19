let secretNumber = parseInt(Math.random() * 51);
let tries = 5;
const elementResult = document.getElementById("result");
elementResult.innerHTML = "A number was choosen between 0 and 50.\nYou have 5 guesses";

function Guess() {
  let guess = parseInt(document.getElementById("value").value);

  if (tries > 0 && guess == secretNumber) {
    elementResult.innerHTML = "Right answer, new number sorted.\nYou have 5 tries";
    secretNumber = parseInt(Math.random() * 51);
    tries = 5;
  }
  else if (tries != 0 && (guess > 50 || guess < 0)) {
    elementResult.innerHTML = "Please put a number between 0 and 50";
  }
  else if (tries == 1) {
    secretNumber = parseInt(Math.random() * 51);
    tries = 5;
    elementResult.innerHTML = "You are out of tries. A new number was sorted,\nyou have 5 guesses";
  }
  else if (guess > secretNumber) {
    tries -= 1;
    elementResult.innerHTML = `The number is lower than your guess,\nyou have ${tries} guesses left`;
  }
  else if (guess < secretNumber) {
    tries -= 1;
    elementResult.innerHTML = `The number is higher than your guess,\nyou have ${tries} guesses left`;
  }
}