//GAME SCREEN
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

//DIFFICULTY
const EXTREME = 15;
const HARD = 10;
const NORMAL = 5;
const EASY = 3;
let difficulty = NORMAL;

//TILE
let tileCount = 20;
let tileSize = canvas.clientWidth/tileCount -2;

//OBJECT
let apple = [createApple(1,20),createApple(1,20)];
let snake = [[Math.round(tileCount/2),Math.round(tileCount/2)]]

//DIRECTION
let xV = 0;
let yV = -1;

//CONTROL GAME
let isGaming = false;

//key down listener
document.body.addEventListener('keydown',keyDown);

//game loop
function drawGame(){
    if(isGaming){
        clearScreen();
        drawSnake();
        drawApple();
        changeSnakePosition();
    }
    setTimeout(drawGame, 1000/difficulty);
}

function clearScreen(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight);
}


function changeSnakePosition(){
    head = snake[0];
    if ( ((head[0]+yV)!=apple[1])||((head[1]+xV)!=apple[0])){
        snake.pop();
    }
    snake.unshift([head[0]+yV,head[1]+xV]);
}

function drawSnake(){
    for ( let s of snake ){
        ctx.fillStyle = 'green';
        ctx.fillRect(s[1]*tileCount,s[0]*tileCount,tileSize,tileSize);
    }
}

function createApple(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
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

function keyDown(event){
    //keyboard left
    if(event.keyCode == 37){
        xV = -1;
        yV = 0;
    }
    //keyboard up
    if(event.keyCode == 38){
        xV = 0;
        yV = -1;
    }
    //keyboard right
    if(event.keyCode == 39){
        xV = 1;
        yV = 0;
    }
    //keyboard down
    if(event.keyCode == 40){
        xV = 0;
        yV = 1;
    }
    if(event.keyCode == 80){
        if(isGaming){
            isGaming = false;
        }
        else{
            isGaming = true;
        }
    }
}

//start Game
function drawUI(){
    console.log("draw something USER INTERFACE");
}


//init
clearScreen();
drawUI();
drawGame();