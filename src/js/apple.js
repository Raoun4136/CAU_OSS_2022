function createApple(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function drawApple(){
    ctx.fillStyle = 'red';
    ctx.fillRect(apple[0]*tileSize,apple[1]*tileSize,tileSize,tileSize);
}