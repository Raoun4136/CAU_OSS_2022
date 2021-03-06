//GAME SCREEN
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

function setGameScreen() {
	if (PLAYER_NUM == 1) {
		canvas = document.getElementById("game");
		ctx = canvas.getContext("2d");
	}

	if (PLAYER_NUM == 2) {
		canvas = document.getElementById("game_for_2p");
		ctx = canvas.getContext("2d");
	}
}

//DIFFICULTY
const HARD = 15;
const NORMAL = 10;
const EASY = 5;
const VERYEASY = 3;

//MAP SIZE
const SMALL = 20;
const MEDIUM = 40;
const LARGE = 60;

let difficulty = NORMAL;
let tileCount = MEDIUM;
let tileSize = canvas.clientHeight / tileCount;
let initial_x = Math.floor(Math.random() * 40);
let initial_y = Math.floor(Math.random() * 40);
while (
	initial_x === Math.round(tileCount / 2) &&
	initial_y === Math.round(tileCount / 2)
) {
	initial_x = Math.floor(Math.random() * 40);
	initial_y = Math.floor(Math.random() * 40);
}

let apple_startPosition = [initial_y, initial_x];
let snake_startPosition = [
	Math.floor(tileCount / 2),
	Math.floor(tileCount / 2),
];
let directions = [
	[1, 0],
	[-1, 0],
	[0, 1],
	[0, -1],
];

//CONTROL GAME
let isGaming = false;
let isPaused = false;
let PLAYER_NUM = 1;

let time = 0;
let score = 0;
let eatApple = 0;

let start = new Date();
let pauseTime = 0;
//save
let save_x = 0;
//rank
let rank_x = 0;
//load
const loadDiv = document.querySelector("#load_location");
const rankDiv = document.querySelector("#rank_location");
let loadTime = 0;

//control key
let isStarted = false;
let isSaving = false;
let isGameOver = false;
let isLoading = false;
let isRanking = false;
let isAuto = false;
let is1Player = false;
let is2Player = false;
let isSelect = true;

let isSnakeChanged = false;
