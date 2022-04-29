//reset canvas
function clearScreen(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight);
    countTileSize();
}

function countTileSize(){
    tileSize = canvas.clientWidth/tileCount-2;
}

function runningTime(){
    const now = new Date();
    time = Math.floor((now-start)/1000);
    score = time+eatApple*50;
}

//game loop
function drawGame(){
    if(isGaming){
        clearScreen();
        runningTime();
        changeSnakePosition();
        drawSnake();
        drawApple();
        
    }
    setTimeout(drawGame, 1000/difficulty);
}