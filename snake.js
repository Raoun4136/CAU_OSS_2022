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
console.log(tileSize);

function createApple(min,max){
    let randNum =  Math.floor(Math.random()*(max-min+1))+min;
    return randNum;
}
let apple = [10,10];
let snake = [[Math.round(tileCount/2),Math.round(tileCount/2)]]
let xV = 0;
let yV = 0;

//game loop
function drawGame(){
    clearScreen();
    drawSnake();
    drawApple();
    changeSnakePosition();
    setTimeout(drawGame, 1000/difficulty);
}

function clearScreen(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight);
}
document.body.addEventListener('keydown',keyDown);

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
        ctx.fillRect(s[1]*tileSize+1,s[0]*tileSize+1,tileSize-2,tileSize-1);
    }

}

function drawApple(){
    ctx.fillStyle = 'red';
    ctx.fillRect(apple[0]*tileSize,apple[1]*tileSize,tileSize,tileSize);
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
}

//init
drawGame();