function changeSnakePosition(){

    head = p1.snake[0];
    let isConflict = 0;
    if ( ((head[0]+p1.yV)!=apple[0])||((head[1]+p1.xV)!=apple[1])){
        p1.snake.pop();
    }
    else {
        console.log("eat apple");
        eatApple+=1;
        createRandomApple();
    }

    for(let s of p1.snake)
    {
        if( (head[0]+p1.yV == s[0]) && (head[1]+p1.xV==s[1])) 
        {
            isConflict =1;
            console.log(s);
        }
    }
    if (isConflict==1 || ((head[0]+p1.yV)<0)||((head[0]+p1.yV)>=40)||((head[1]+p1.xV)<0)||((head[1]+p1.xV)>=40)){
        gameOver();
    }
    p1.snake.unshift([head[0]+p1.yV,head[1]+p1.xV]);

    if(!is1Player){
        head = p2.snake[0];
    let isConflict = 0;
    if ( ((head[0]+p2.yV)!=apple[0])||((head[1]+p2.xV)!=apple[1])){
        p2.snake.pop();
    }
    else {
        console.log("eat apple");
        eatApple+=1;
        createRandomApple();
    }

    for(let s of p2.snake)
    {
        if( (head[0]+p2.yV == s[0]) && (head[1]+p2.xV==s[1])) 
        {
            isConflict =1;
            console.log(s);
        }
    }
    if (isConflict==1 || ((head[0]+p2.yV)<0)||((head[0]+p2.yV)>=40)||((head[1]+p2.xV)<0)||((head[1]+p2.xV)>=40)){
        gameOver();
    }
    p2.snake.unshift([head[0]+p2.yV,head[1]+p2.xV]);

    }
}

function drawSnake(){
    for ( let s of p1.snake ){
        ctx.fillStyle = 'green';
        ctx.fillRect(s[1]*tileSize+1,s[0]*tileSize+1,tileSize-1,tileSize-1);
    }
    if(!is1Player){
        for ( let s of p2.snake ){
            ctx.fillStyle = 'blue';
            ctx.fillRect(s[1]*tileSize+1,s[0]*tileSize+1,tileSize-1,tileSize-1);
        }
    }
}
