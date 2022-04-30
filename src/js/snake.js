var rank_num = 0;

function changeSnakePosition(){
 
    head = snake[0];
    let isConflict = 0;
    if ( ((head[0]+yV)!=apple[0])||((head[1]+xV)!=apple[1])){
        snake.pop();
    }
    else {
        console.log("eat apple");
        eatApple+=1;
        createRandomApple();
    }
<<<<<<< HEAD
    if ( ((head[0]+yV)<0)||((head[0]+yV)>40)||((head[1]+xV)<0)||((head[1]+xV)>40)){
        // alert("Game over");                    //exit code
        storeRanking();
        rank_num++;
=======

    for(let s of snake)
    {
        if( (head[0]+yV == s[0]) && (head[1]+xV==s[1])) 
        {
            isConflict =1;
            console.log(s);
        }
    }
    if (isConflict==1 || ((head[0]+yV)<0)||((head[0]+yV)>=40)||((head[1]+xV)<0)||((head[1]+xV)>=40)){
       //gameOver();
        alert("Game over");                    //exit test code
        storeRanking();
>>>>>>> 60ac1723127beade566b357fdb4dcfacd20f87de
    }
    snake.unshift([head[0]+yV,head[1]+xV]);
}

function drawSnake(){
    for ( let s of snake ){
        ctx.fillStyle = 'green';
        ctx.fillRect(s[1]*tileSize+1,s[0]*tileSize+1,tileSize-1,tileSize-1);
    }
}

