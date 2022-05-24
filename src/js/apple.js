function createApple(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function drawApple(){
    ctx.fillStyle = 'red';
    ctx.fillRect(players[0].apple[1]*tileSize,players[0].apple[0]*tileSize,tileSize,tileSize);
    if(PLAYER_NUM==2)ctx.fillRect(players[1].apple[1]*tileSize,players[1].apple[0]*tileSize,tileSize,tileSize);
}


function createRandomApple(player){
    apple_y = createApple(0,(canvas.clientHeight/tileSize)-1);
    apple_x = createApple(0,(canvas.clientWidth/tileSize)-1);
    let i =0;
    while (i<players[0].snake.length){
        if( apple_y===players[0].snake[i][0] && apple_x===players[0].snake[i][1]){
                console.log("apple conflict",apple_y,apple_x);
                apple_y = createApple(0,(canvas.clientHeight/tileSize)-1);
                apple_x = createApple(0,(canvas.clientWidth/tileSize)-1);  
                console.log(apple_y,apple_x);
                i=0;
        }
        i+=1
    }
    player.apple = [apple_y,apple_x];
}