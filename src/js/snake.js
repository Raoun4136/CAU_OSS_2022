function changeSnakePosition(){
    if (isAuto){
        autoDirection();
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
    if ((head[0] > apple[0]) ){
        if(direction.join("") === [-1,0].join("")){return true;}
    }
    if ((head[1] < apple[1]) ){
        if(direction.join("") === [0,1].join("")){return true;}
    }
    if ((head[1] > apple[1]) ){
        if(direction.join("") === [0,-1].join("")){return true;}
    }
    return false;
}

// Default logic to apple
function autoDirection(){
    head = snake[0];
    let subDirections=[];
    if (yV===0){ directions = [[0,1],[0,-1],[1,0],[-1,0]]; }
    else {  directions = [[1,0],[-1,0],[0,1],[0,-1]]; }

    // Search optimize direction
    for ( let d of directions){
        let isBlock=0;
        if (head[0]+d[0]<0 || head[0]+d[0]>39 || head[1]+d[1]<0 || head[1]+d[1]>39){
            continue;
        }
        for ( let s of snake){
            if( (s[0]=== head[0]+d[0]) && (s[1]===head[1]+d[1])){
                isBlock+=1;
                break;
            }
        }
        if(isBlock===0){
            subDirections.push([d[0],d[1]]);
            if (isOptimal(d)) { 
                yV = d[0];
                xV = d[1];
                return ; }
        }
        
    }
    
    // block 가중치 반영
    let minWeight=MEDIUM*2;
    for ( sub of subDirections){
        if ( minWeight>Math.abs(apple[0]-(head[0]+sub[0]))+Math.abs(apple[1]-(head[1]+sub[1]))){
            minWeight = Math.abs(apple[0]-(head[1]+sub[1]))+Math.abs(apple[1]-(head[1]+sub[1]));
            yV = sub[0];
            xV = sub[1];
        }
    }
    console.log(yV,xV);
    // 돌아가는 방향에 벽이 있므면 다시 돌려주는 로직 필요 
    
}

function testApple(){
    apple=[snake[0][0]-10,snake[0][1]];
}
