//GAME SCREEN
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

//SIZE

//DIFFICULTY
const EXTREME = 15;
const HARD = 10;
const NORMAL = 5;
const EASY = 3;
let difficulty = EASY;



//game loop
function drawGame(){
    clearScreen();
    setTimeout(drawGame, 1000/difficulty);
}


//reset canvas
function clearScreen(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight);
}

//init
drawGame();