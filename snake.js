//GAME SCREEN
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

//DIFFICULTY
const EXTREME = 15;
const HARD = 10;
const NORMAL = 5;
const EASY = 3;

let difficulty = EASY;
let tileCount = 20;
let tileSize = canvas.clientWidth/tileCount -2;

function createApple(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
let apple = [createApple(1,20),createApple(1,20)];
let snake = [[Math.round(tileCount/2),Math.round(tileCount/2)]]

//game loop
function drawGame(){
    clearScreen();
    drawSnake();
    drawApple();
    setTimeout(drawGame, 1000/difficulty);
}

function drawSnake(){
    for ( let s of snake ){
        ctx.fillStyle = 'green';
        ctx.fillRect(s[1]*tileCount,s[0]*tileCount,tileSize,tileSize);
    }

}

function drawApple(){
    ctx.fillStyle = 'red';
    ctx.fillRect(apple[0]*tileCount,apple[1]*tileCount,tileSize,tileSize);
}

//reset canvas
function clearScreen(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight);
}

//init
drawGame();