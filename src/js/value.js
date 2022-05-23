//GAME SCREEN
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

//DIFFICULTY
const HARD = 15;
const NORMAL = 10;
const EASY = 5;
const VERYEASY = 3;

//MAP SIZE
const SMALL = 20;
const MEDIUM = 40;
const LARGE = 60;

let difficulty = VERYEASY;
let tileCount = MEDIUM;
let tileSize = canvas.clientWidth/tileCount;
let initial_x = Math.floor(Math.random()*(40));
let initial_y= Math.floor(Math.random()*(40));
while(initial_x===Math.round(tileCount/2)&&initial_y===Math.round(tileCount/2)){
    initial_x= Math.floor(Math.random()*(40));
    initial_y= Math.floor(Math.random()*(40));
}
let apple = [initial_y,initial_x];
let snake_startPosition = [Math.floor(tileCount/2),Math.floor(tileCount/2)];


//DIRECTION


//CONTROL GAME
let isGaming = false;
let isPaused = false;
let is1Player = true;

let time = 0;
let score = 0;
let eatApple = 0;

let start = new Date();

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
let isSelect = false;

let isSnakeChanged = false;