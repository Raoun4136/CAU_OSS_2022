//init Game
function initGame(){
    clearScreen();
    drawGame();
}

function gameOver(){
    gameOverOn();
    isGaming = false;
    console.log(score);
}

initGame();