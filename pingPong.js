const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const maxScoreSelect = document.querySelector('#winningScore');



let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

player1.addEventListener('click', () => {
    if(!isGameOver){
        p1Score += 1;
        if(p1Score === winningScore){
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');

        }
    }
    p1Display.textContent = p1Score;

})

player2.addEventListener('click', () => {
    if (!isGameOver){
        p2Score += 1;
        if(p2Score === winningScore){
            isGameOver = true;
            p1Display.classList.add('loser');
            p2Display.classList.add('winner');
            
        }
    }
    p2Display.textContent = p2Score;

})

maxScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(maxScoreSelect.value);
    reset();
})

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner','loser');
}
