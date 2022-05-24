function changeSnakePosition(){
    if (isAuto){
        autoDirection();
        console.log(yV,xV);
    }
    head = snake[0];
    let isConflict = 0;
    if ( ((head[0]+yV)!=apple[0])||((head[1]+xV)!=apple[1])){
        snake.pop();
    }
    else {
        console.log("eat apple");
        eatApple+=1;
        //testApple();
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

function isOptimal(direction){
    if ((head[0] < apple[0]) ){
        if(direction.join("") === [1,0].join("")){return true;}
    }
    else if ((head[0] > apple[0]) ){
        if(direction.join("") === [-1,0].join("")){return true;}
    }
    else if ((head[1] < apple[1]) ){
        if(direction.join("") === [0,1].join("")){return true;}
    }
    else if ((head[1] > apple[1]) ){
        if(direction.join("") === [0,-1].join("")){return true;}
    }
    return false;
}

// Default logic, to apple
function autoDirection(){
    head = snake[0]
    if (yV===0){ directions = [[0,1],[0,-1],[1,0],[-1,0]]; }
    else {  directions = [[1,0],[-1,0],[0,1],[0,-1]]; }
    // 최적 경로
    for ( let d of directions){
        let isBlock=0;
        for ( let s of snake){
            if( (s[0]=== head[0]+d[0]) && (s[1]===head[1]+d[1])){
                isBlock+=1;
                break;
            }
        }
        if(isBlock===0){
            yV = d[0];
            xV = d[1];
            if (isOptimal(d)) { return ; }
        }
        
    }
    
}

function testApple(){
    apple=[snake[0][0]-10,snake[0][1]];
}
