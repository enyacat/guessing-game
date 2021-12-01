// reset should reset buttons, number of guesses and the message
// once you guessed it right. do not allow the user to continue with the game

// guessing game bonus exercise - limit guesses to 3 and if you run out display the game over message

// var index = $(this).index() + 1;

var guessBtns = document.querySelectorAll('section button')
var resetBtn = document.querySelector('.reset')
var firstBtn = document.querySelector('button') //first button
var guessNumberSpan = document.querySelector('.guess-number-span')
var guessNumber = 3
var secretNumber = Math.ceil(Math.random() * 10)
var messageDiv = document.querySelector('.message-div')


guessNumberSpan.textContent = 3;

function handleUserGuess(event) {
    // event.target.dataset.number
    var theOneTheUserClickedOn = event.target
    let userGuess = Number(theOneTheUserClickedOn.dataset.number)
    if (userGuess === secretNumber) {
        messageDiv.textContent = 'You got it!';
        guessBtns.forEach(function (button) {
            button.disabled = true;
        })
    } else if (guessNumber > 1) {
        guessNumber--;
        guessNumberSpan.textContent = guessNumber;
        let theOneTheUserClickedOn = event.target;
        theOneTheUserClickedOn.disabled = true
    } else {
        messageDiv.textContent = "Game Over!"
        guessNumber--;
        guessNumberSpan.textContent = guessNumber;
        guessBtns.forEach(function (button) {
            button.disabled = true;
        })
    }
}


function handleReset() {
    for (let i = 0; i < guessBtns.length; i++) {
        guessBtns[i].disabled = false;
    }
    guessNumber = 3;
    secretNumber = Math.ceil(Math.random() * 10)
    guessNumberSpan.textContent = guessNumber;
    messageDiv.textContent = "";
}

guessBtns.forEach(function (button) {
    button.addEventListener('click', handleUserGuess)
})

resetBtn.addEventListener('click', handleReset)

// function handleReset() {
//     guessBtns.forEach(function (button) {
//         button.disabled = false;
//     })
// }

