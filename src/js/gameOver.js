function gameOver(){
    gameOverOn();
    isGaming = false;
    isGameOver = true;
    isAble = true;
    let gameOver_score = document.querySelector("#gameOver_score");
    gameOver_score.innerHTML = score;
}