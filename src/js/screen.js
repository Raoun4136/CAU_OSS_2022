//reset canvas
function clearScreen() {
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
	drawScore();
	countTileSize();
}

function countTileSize() {
	tileSize = canvas.clientHeight / tileCount;
}

function runningTime() {
	const now = new Date();
	time = Math.floor((now - start - pauseTime) / 1000);
	score = time + eatApple * 50;
}
function drawScore() {
	if (is2Player) {
		document.querySelector("#txt_score").innerText = "DUAL MODE";
	} else {
		document.querySelector("#txt_score").innerText = score;
	}
}
//game loop
function drawGame() {
	if (isGaming) {
		clearScreen();
		runningTime();
		changeSnakePosition();
		drawSnake();
		isSnakeChanged = false;
		drawApple();
		drawScore();
	}
	setTimeout(drawGame, 1000 / difficulty);
}
