function gameOver(){
    gameOverOn();
    isGaming = false;
    let txt_score = document.querySelector("#txt_score");
    txt_score.innerHTML = score;
}