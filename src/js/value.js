//GAME SCREEN
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

//DIFFICULTY
const EXTREME = 15;
const HARD = 10;
const NORMAL = 5;
const EASY = 3;

//MAP SIZE
const SMALL = 15;
const MEDIUM = 40;
const LARGE = 30;

let difficulty = NORMAL;
let tileCount = MEDIUM;
let tileSize = canvas.clientWidth/tileCount;


let apple = [10,10];
let snake = [[Math.round(tileCount/2),Math.round(tileCount/2)]]

//DIRECTION
let xV = 0;
let yV = -1;

//CONTROL GAME
let isGaming = false;

let time = 0;
let score = 0;
let eatApple = 0;

let start = new Date();