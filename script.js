var secretNumber = parseInt(Math.random() * 51);
var tries = 5;
var elementResult = document.getElementById("result");
elementResult.innerHTML = "A number was choose between 0 and 50";

function Guess() {
  var elementResult = document.getElementById("result");
  var guess = parseInt(document.getElementById("value").value);
  if (tries > 0 && guess == secretNumber) {
    elementResult.innerHTML = "Right answer, new number sorted";
    secretNumber = parseInt(Math.random() * 51);
    tries = 5;
  } else if ((tries > 0 && guess >= 31) || guess <= -1) {
    elementResult.innerHTML = "Please put a number between 0 and 50";
  } else if (tries == 1) {
    secretNumber = parseInt(Math.random() * 51);
    tries = 5;
    elementResult.innerHTML = "New sorted number, you have 5 guesses";
  } else if (guess > secretNumber) {
    tries -= 1;
    elementResult.innerHTML = "The number is lower than your guess, you have " +
      tries + " guesses left";
  } else if (guess < secretNumber) {
    tries -= 1;
    elementResult.innerHTML = "The number is higher than your guess, you have " +
      tries + " guesses left";
  }
}