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
const players = ['p1', 'p2'];
let turnPlayer = players[Math.floor(Math.random() * players.length)];

// update playingtoScore into DOM
playingToElm.textContent = winningScore;

// disable playerBtn based on turn
turnPlayer === 'p1' ?
    p2BtnElm.setAttribute('disabled', 'disabled') :
    p1BtnElm.setAttribute('disabled', 'disabled');

function validationInput(score) {
    if (score < 1) {
        alert('please provide a value more than 0')
    }
}
function handleWinningState() {
    if(p1Score === winningScore || p2Score === winningScore) {
        gameOver = true;
        // disabled player 1 or player 2 btn
        p1BtnElm.setAttribute('disabled', 'disabled');
        p2BtnElm.setAttribute('disabled', 'disabled');
        alert(+ winningScore+ ' is the winner');
    }
}
function resetValues() {
    p1Score = 0;
    p2Score = 0;
    winningScore = 5;
    gameOver = false;
    turnPlayer = players[Math.floor(Math.random() * players.length)];
    p1BtnElm.removeAttribute('disabled');
    p2BtnElm.removeAttribute('disabled');
    p1scoreElm.textContent = p1Score;
    p2scoreElm.textContent = p2Score;
    playingToElm.textContent = winningScore;
}

// input and update playing to score
formElm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    // reset previous state
    resetValues();
    // getting the input
    const inputScore = inputScoreElm.value;
    // validation check
    validationInput(inputScore);
    // saving it into data layer
    winningScore = +inputScore;
    // showing value on dom
    playingToElm.textContent = winningScore;
    // reset the input
    inputScoreElm.value = '';
});

p1BtnElm.addEventListener('click', (evt) => {
    // increase the content
    if (turnPlayer === 'p1' && !gameOver && p1Score < winningScore) {
        p1Score++;
        // update DOM
        p1scoreElm.textContent = p1Score;
        turnPlayer = 'p2';
        // disable p1
        p1BtnElm.setAttribute('disabled', 'disabled');
        // enable p2
        p2BtnElm.removeAttribute('disabled');
    }

    handleWinningState();

    // if (p1Score === winningScore) {
    //     gameOver = true;
    //     // disabled player 1 or player 2 btn
    //     p1BtnElm.setAttribute('disabled', 'disabled');
    //     p2BtnElm.setAttribute('disabled', 'disabled');
    //     // show messages
    //     alert('Player-1 is winner');
    // }

});

p2BtnElm.addEventListener('click', (evt) => {
    // increase the content
    if (turnPlayer === 'p2' && !gameOver && p2Score < winningScore) {
        p2Score++;
        // update DOM
        p2scoreElm.textContent = p2Score;
        turnPlayer = 'p1';
        // disable p2
        p2BtnElm.setAttribute('disabled', 'disabled');
        // enable p1
        p1BtnElm.removeAttribute('disabled');
    }
    handleWinningState();
    // if (p2Score === winningScore) {
    //     gameOver = true;
    //     // disabled player 1 or player 2 btn
    //     p1BtnElm.setAttribute('disabled', 'disabled');
    //     p2BtnElm.setAttribute('disabled', 'disabled');
    //     // show messages
    //     alert('Player-2 is winner');
    // }
});

// Reset the button
resetBtnElm.addEventListener('click', resetValues);