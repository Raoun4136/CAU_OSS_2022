function changeSnakePosition(){

    head = players[0].snake[0];
    let isConflict = 0;
    if ( ((head[0]+players[0].yV)!=players[0].apple[0])||((head[1]+players[0].xV)!=players[0].apple[1])){
        players[0].snake.pop();
    }
    else {
        console.log("eat apple");
        eatApple+=1;
        createRandomApple();
    }

    for(let s of players[0].snake)
    {
        if( (head[0]+players[0].yV == s[0]) && (head[1]+players[0].xV==s[1])) 
        {
            isConflict =1;
        }
    }
    if(PLAYER_NUM==2){
    for(let s of players[1].snake)
    {
        if( (head[0]+players[0].yV == s[0]) && (head[1]+players[0].xV==s[1])) 
        {
            isConflict =1;
        }
    }
    }

    if (isConflict==1 || ((head[0]+players[0].yV)<0)||((head[0]+players[0].yV)>=(canvas.clientHeight/tileSize))||((head[1]+players[0].xV)<0)||((head[1]+players[0].xV)>=(canvas.clientWidth/tileSize))){
        gameOver();
    }
    players[0].snake.unshift([head[0]+players[0].yV,head[1]+players[0].xV]);

    if(PLAYER_NUM==2){
        head = players[1].snake[0];
    let isConflict = 0;
    if ( ((head[0]+players[1].yV)!=players[0].apple[0])||((head[1]+players[1].xV)!=players[0].apple[1])){
        players[1].snake.pop();
    }
    else {
        console.log("eat apple");
        eatApple+=1;
        createRandomApple();
    }

    for(let s of players[0].snake)
    {
        if( (head[0]+players[1].yV == s[0]) && (head[1]+players[1].xV==s[1])) 
        {
            isConflict =1;
        }
    }
    for(let s of players[1].snake)
    {
        if( (head[0]+players[1].yV == s[0]) && (head[1]+players[1].xV==s[1])) 
        {
            isConflict =1;
        }
    }
    if (isConflict==1 || ((head[0]+players[1].yV)<0)||((head[0]+players[1].yV)>=(canvas.clientHeight/tileSize))||((head[1]+players[1].xV)<0)||((head[1]+players[1].xV)>=(canvas.clientWidth/tileSize))){
        gameOver();
    }
    players[1].snake.unshift([head[0]+players[1].yV,head[1]+players[1].xV]);

    }
}

function drawSnake(){
    for ( let s of players[0].snake ){
        ctx.fillStyle = 'green';
        ctx.fillRect(s[1]*tileSize+1,s[0]*tileSize+1,tileSize-1,tileSize-1);
    }
    if(PLAYER_NUM==2){
        for ( let s of players[1].snake ){
            ctx.fillStyle = 'blue';
            ctx.fillRect(s[1]*tileSize+1,s[0]*tileSize+1,tileSize-1,tileSize-1);
        }
    }
}
