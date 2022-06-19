function gameOver() {
	gameOverOn();
	isGaming = false;
	isGameOver = true;
	isAble = true;
	document.querySelector("#gameOver_score").innerHTML = score;
	document.querySelector("#auto_gameOver_score").innerHTML = score;
	playGameOverSound()
}
