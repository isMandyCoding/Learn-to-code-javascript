
// returns a random integer from 1 to 100
var answer = Math.floor(Math.random() * 100) + 1; 
var guess;
var message;
var tries = 0;

while (guess != answer) {
    guess = prompt("What is your guess? 1-5 " + message)
    if (guess == answer) {
        message = "You Win!";
    } else if (guess < answer) {
        message = "Your guess is too low!";
    } else if (guess > answer){
        message = "your guess is too high!";
    } else {
        message = "I think you entered something wrong..."
    }
    tries++
}

alert("you won! it took you " + tries + " tries!")