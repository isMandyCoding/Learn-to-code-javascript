
// returns a random integer from 1 to 100

var guess;
var message;
var tries = 0;

function game(numberRange) { 
    var answer = Math.floor(Math.random() * numberRange) + 1; 
    while (guess != answer) {
        guess = prompt("What is your guess? 1-5 " + message)
        if (guess < answer) {
            message = "Your guess is too low!";
        } else if (guess > answer){
            message = "your guess is too high!";
        } else {
            message = "I think you entered something wrong..."
        }
        tries++
    }
    alert("you won! it took you " + tries + " tries!")

}

// Call the function. Pass through the number range to guess from
game(5)