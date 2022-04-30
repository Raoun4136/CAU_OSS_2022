function createApple(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function drawApple(){
    ctx.fillStyle = 'red';
    ctx.fillRect(apple[0]*tileSize,apple[1]*tileSize,tileSize,tileSize);
}

function createRandomApple(){
    apple_y = createApple(0,39);
    apple_x = createApple(0,39);
    for ( let s of snake){
        while ( apple_y===s[0] && apple_x===s[1]){
            apple_y = createApple(0,39);
            apple_x = createApple(0,39);  
        }
    }
    apple = [apple_y,apple_x];
}