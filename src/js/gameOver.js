function gameOver(){
    gameOverOn();
    isGaming = false;
    isGameOver = true;
    isAble = true;
    let txt_score = document.querySelector("#txt_score");
    txt_score.innerHTML = score;
}