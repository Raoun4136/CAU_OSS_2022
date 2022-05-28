function changeSnakePosition() {
	head = players[0].snake[0];
	let isConflict = 0;
	if (PLAYER_NUM == 0) {
		autoChange();
	}
	if (PLAYER_NUM == 1 || PLAYER_NUM == 0) {
		if (
			head[0] + players[0].yV != players[0].apple[0] ||
			head[1] + players[0].xV != players[0].apple[1]
		) {
			players[0].snake.pop();
		} else {
			console.log("eat apple");
			eatApple += 1;
			createRandomApple(players[0]);
		}
	}
	if (PLAYER_NUM == 2) {
		if (
			head[0] + players[0].yV == players[0].apple[0] &&
			head[1] + players[0].xV == players[0].apple[1]
		) {
			eatApple += 1;
			createRandomApple(players[0]);
		} else if (
			head[0] + players[0].yV == players[1].apple[0] &&
			head[1] + players[0].xV == players[1].apple[1]
		) {
			eatApple += 1;
			createRandomApple(players[1]);
		} else players[0].snake.pop();
	}

	for (let s of players[0].snake) {
		if (head[0] + players[0].yV == s[0] && head[1] + players[0].xV == s[1]) {
			isConflict = 1;
		}
	}
	if (PLAYER_NUM == 2) {
		for (let s of players[1].snake) {
			if (head[0] + players[0].yV == s[0] && head[1] + players[0].xV == s[1]) {
				isConflict = 1;
			}
		}
	}

	if (
		isConflict == 1 ||
		head[0] + players[0].yV < 0 ||
		head[0] + players[0].yV >= canvas.clientHeight / tileSize ||
		head[1] + players[0].xV < 0 ||
		head[1] + players[0].xV >= canvas.clientWidth / tileSize
	) {
		if (PLAYER_NUM == 1 || PLAYER_NUM == 0) {
			gameOver();
		}
		if (PLAYER_NUM == 2) {
			let Winner = document.querySelector("#Winner");
			Winner.innerHTML = "Player 2";
			WinnerOn();
			isPaused = true;
		}
	}
	players[0].snake.unshift([head[0] + players[0].yV, head[1] + players[0].xV]);

	if (PLAYER_NUM == 2) {
		head = players[1].snake[0];
		let isConflict = 0;
		if (
			head[0] + players[1].yV == players[0].apple[0] &&
			head[1] + players[1].xV == players[0].apple[1]
		) {
			eatApple += 1;
			createRandomApple(players[0]);
		} else if (
			head[0] + players[1].yV == players[1].apple[0] &&
			head[1] + players[1].xV == players[1].apple[1]
		) {
			eatApple += 1;
			createRandomApple(players[1]);
		} else players[1].snake.pop();

		for (let s of players[0].snake) {
			if (head[0] + players[1].yV == s[0] && head[1] + players[1].xV == s[1]) {
				isConflict = 1;
			}
		}
		for (let s of players[1].snake) {
			if (head[0] + players[1].yV == s[0] && head[1] + players[1].xV == s[1]) {
				isConflict = 1;
			}
		}
		if (
			isConflict == 1 ||
			head[0] + players[1].yV < 0 ||
			head[0] + players[1].yV >= canvas.clientHeight / tileSize ||
			head[1] + players[1].xV < 0 ||
			head[1] + players[1].xV >= canvas.clientWidth / tileSize
		) {
			if (PLAYER_NUM == 1 || PLAYER_NUM == 0) {
				gameOver();
			}
			if (PLAYER_NUM == 2) {
				let Winner = document.querySelector("#Winner");
				Winner.innerHTML = "Player 1";
				WinnerOn();
				isPaused = true;
			}
		}
		players[1].snake.unshift([
			head[0] + players[1].yV,
			head[1] + players[1].xV,
		]);
	}
}

function drawSnake() {
	for (let s of players[0].snake) {
		ctx.fillStyle = "green";
		ctx.fillRect(
			s[1] * tileSize + 1,
			s[0] * tileSize + 1,
			tileSize - 1,
			tileSize - 1
		);
	}
	if (PLAYER_NUM == 2) {
		for (let s of players[1].snake) {
			ctx.fillStyle = "blue";
			ctx.fillRect(
				s[1] * tileSize + 1,
				s[0] * tileSize + 1,
				tileSize - 1,
				tileSize - 1
			);
		}
	}
}

function autoChange() {
	//AUTO MODE
	let isRight = players[0].apple[1] - head[1];
	let isDown = players[0].apple[0] - head[0];
	let ableXY = [];
	addAbleXY(ableXY);
	console.log(ableXY);
	if (Math.abs(isRight) - Math.abs(isDown) > 0) {
		//x distance > y distance
		if (isRight > 0) {
			//apple.x > head.x --- RIGHT
			if (isAble(1, 0)) {
				players[0].xV = 1;
				players[0].yV = 0;
			} else {
				RandomChange(ableXY);
			}
		} else if (isRight < 0) {
			//apple.x < head.x --- LEFT
			if (isAble(-1, 0)) {
				players[0].xV = -1;
				players[0].yV = 0;
			} else {
				RandomChange(ableXY);
			}
		}
	} else {
		//x distance <= y distance
		if (isDown > 0) {
			//apple.x > head.x --- DOWN
			if (isAble(0, 1)) {
				players[0].xV = 0;
				players[0].yV = 1;
			} else {
				RandomChange(ableXY);
			}
		} else {
			//apple.x < head.x --- UP
			if (isAble(0, -1)) {
				players[0].xV = 0;
				players[0].yV = -1;
			} else {
				RandomChange(ableXY);
			}
		}
	}
	console.log(`snake : ${players[0].snake}`);
	console.log(`apple  : ${players[0].apple}`);
}

//랜덤 전에 down, right쪽으로 가야됨.
function RandomChange(ableXY) {
	let randNum = Math.floor(Math.random() * ableXY.length);
	console.log(`randNum = ${randNum}`);
	console.log(`ableXY = ${ableXY}`);
	console.log(`ableXY[randNum] = ${ableXY[randNum]}`);
	if (ableXY[randNum]) {
		players[0].xV = ableXY[randNum][0];
		players[0].yV = ableXY[randNum][1];
	}
}

function isAble(x, y) {
	//갈 곳이 벽인지, 내 스네이크인지
	for (let s of players[0].snake) {
		if (head[0] + y == s[0] && head[1] + x == s[1]) {
			return false;
		}
	}
	if (
		head[0] + y < 0 ||
		head[0] + y >= canvas.clientHeight / tileSize ||
		head[1] + x < 0 ||
		head[1] + x >= canvas.clientWidth / tileSize
	) {
		return false;
	}
	return true;
}

function addAbleXY(ableXY) {
	if (isAble(1, 0)) {
		ableXY.push([1, 0]);
	}
	if (isAble(-1, 0)) {
		ableXY.push([-1, 0]);
	}
	if (isAble(0, 1)) {
		ableXY.push([0, 1]);
	}
	if (isAble(0, -1)) {
		ableXY.push([0, -1]);
	}
}
