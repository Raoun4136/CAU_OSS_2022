function changeSnakePosition(){
    if (isAuto){
        createRandomDirection();
    }
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

    for(let s of snake)
    {
        if( (head[0]+yV == s[0]) && (head[1]+xV==s[1])) 
        {
            isConflict =1;
            console.log(s);
        }
    }
    if (isConflict==1 || ((head[0]+yV)<0)||((head[0]+yV)>=40)||((head[1]+xV)<0)||((head[1]+xV)>=40)){
        gameOver();
    }
    snake.unshift([head[0]+yV,head[1]+xV]);
}

function drawSnake(){
    for ( let s of snake ){
        ctx.fillStyle = 'green';
        ctx.fillRect(s[1]*tileSize+1,s[0]*tileSize+1,tileSize-1,tileSize-1);
    }
}

function createRandomDirection(){
    let rand1 = Math.floor(Math.random()*2);
    let rand2 = (rand1===0)? 1 : 0;
    let negative1 = (-1)**Math.floor(Math.random()*2);
    let negative2 = (-1)**Math.floor(Math.random()*2);
    xV = rand1*negative1;
    yV = rand2*negative2;
}
