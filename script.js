// Selectors
const p1scoreElm = document.querySelector('#p1Score');
const p2scoreElm = document.querySelector('#p2Score');
const playingToElm = document.querySelector('.playingTo');
const inputScoreElm = document.querySelector('#inputScore');
const p1BtnElm = document.querySelector('#p1Btn');
const p2BtnElm = document.querySelector('#p2Btn');
const resetBtnElm = document.querySelector('#resetBtn');
const formElm = document.querySelector('form');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;

// update playingtoScore into DOM
playingToElm.textContent = winningScore;

function validationInput(score) {
    if (score < 1) {
        alert('please provide a value more than 0')
    }
}
// input and update playing to score
formElm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    // getting the input
    const inputScore = inputScoreElm.value;
    // validation check
    validationInput(inputScore);
    // showing value on dom
    playingToElm.textContent = inputScore;
    // reset the input
    inputScoreElm.value = '';
});

p1BtnElm.addEventListener('click', (evt) => {
    // increase the content
    if (!gameOver && p1Score < winningScore) {
        p1Score++;
        // update DOM
        p1scoreElm.textContent = p1Score;
    }
    if (p1Score === winningScore) {
        gameOver = true;
        // disabled player 1 or player 2 btn
        p1BtnElm.setAttribute('disabled', 'disabled');
        p2BtnElm.setAttribute('disabled', 'disabled');
        // show messages
        alert('Player-1 is winner');
    }

});

p2BtnElm.addEventListener('click', (evt) => {
    // increase the content
    if (!gameOver && p2Score < winningScore) {
        p2Score++;
        // update DOM
        p2scoreElm.textContent = p2Score;
    }
    if (p2Score === winningScore) {
        gameOver = true;
        // disabled player 1 or player 2 btn
        p1BtnElm.setAttribute('disabled', 'disabled');
        p2BtnElm.setAttribute('disabled', 'disabled');
        // show messages
        alert('Player-2 is winner');
    }

    
});