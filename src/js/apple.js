function createApple(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function drawApple(){
    ctx.fillStyle = 'red';
    ctx.fillRect(apple[1]*tileSize,apple[0]*tileSize,tileSize,tileSize);
}

function createRandomApple(){
    apple_y = createApple(0,39);
    apple_x = createApple(0,39);
    let i =0;
    while (i<p1.snake.length){
        if( apple_y===p1.snake[i][0] && apple_x===p1.snake[i][1]){
                console.log("apple conflict",apple_y,apple_x);
                apple_y = createApple(0,39);
                apple_x = createApple(0,39);  
                console.log(apple_y,apple_x);
                i=0;
        }
        i+=1
    }
    apple = [apple_y,apple_x];
}