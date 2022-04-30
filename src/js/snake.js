var rank_num = 0;

function changeSnakePosition(){
 
    head = snake[0];
    if ( ((head[0]+yV)!=apple[1])||((head[1]+xV)!=apple[0])){
        snake.pop();
    }
    else {
        console.log("eat apple");
        eatApple+=1;
    }
    if ( ((head[0]+yV)<0)||((head[0]+yV)>40)||((head[1]+xV)<0)||((head[1]+xV)>40)){
        // alert("Game over");                    //exit code
        storeRanking();
        rank_num++;
    }
    snake.unshift([head[0]+yV,head[1]+xV]);
}

function drawSnake(){
    for ( let s of snake ){
        ctx.fillStyle = 'green';
        ctx.fillRect(s[1]*tileSize+1,s[0]*tileSize+1,tileSize-1,tileSize-1);
    }
}

