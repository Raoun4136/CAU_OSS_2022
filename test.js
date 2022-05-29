function createApple(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function drawApple(){
    ctx.fillStyle = 'red';
    ctx.fillRect(players[0].apple[1]*tileSize,players[0].apple[0]*tileSize,tileSize,tileSize);
    if(PLAYER_NUM==2)ctx.fillRect(players[1].apple[1]*tileSize,players[1].apple[0]*tileSize,tileSize,tileSize);
}

function ifConflictCreateApple(apple_y, apple_x, list){
    let i = 0;
    console.log(list);
    while (i<list.length){
        if( apple_y===list[i][0] && apple_x===list[i][1]){
                console.log("apple conflict",apple_y,apple_x);  
                console.log(apple_y,apple_x);
                return 1;
        }
        i+=1
    }
    return 0;
}

function createRandomApple(player){
    apple_y = createApple(0,(canvas.clientHeight/tileSize)-1);
    apple_x = createApple(0,(canvas.clientWidth/tileSize)-1);
    let forConflict = [];
    let apples = [];
    for( let j=0; j<players.length;j++){
        apples.push(players[j].apple)
    }
    
    while(ifConflictCreateApple(apple_y,apple_x,player.snake))
    {
        apple_y = createApple(0,(canvas.clientHeight/tileSize)-1);
        apple_x = createApple(0,(canvas.clientWidth/tileSize)-1);
    }

    if(is2Player){
        forConflict.push(players[0]);
        forConflict.push(players[1]);
        if(apples){
            forConflict.push(apples);
        }
        ifConflictCreateApple(apple_y,apple_x,forConflict);
    }
    player.apple = [apple_y,apple_x];
}