function changeSnakePosition(){
    head = players[0].snake[0];
    if (isAuto){
        autoDirection();
    }
    
    let isConflict = 0;
    if(PLAYER_NUM==1)
    {
    if ( ((head[0]+players[0].yV)!=players[0].apple[0])||((head[1]+players[0].xV)!=players[0].apple[1])){    
        players[0].snake.pop();
    }
    else {
        console.log("eat apple");
        eatApple+=1;
        //testApple();
        createRandomApple(players[0]);
    }
    }
    if(PLAYER_NUM==2)
    {
        if((head[0]+players[0].yV==players[0].apple[0])&&(head[1]+players[0].xV==players[0].apple[1]))
        {
            eatApple+=1;
            createRandomApple(players[0]);
        }
        else if((head[0]+players[0].yV==players[1].apple[0])&&(head[1]+players[0].xV==players[1].apple[1]))
        {
            eatApple+=1;
            createRandomApple(players[1]);
        }
        else players[0].snake.pop();
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
            if(PLAYER_NUM==1){
                gameOver();
            }
            if(PLAYER_NUM==2)
            {
                let Winner = document.querySelector("#Winner");
                Winner.innerHTML = "Player 2";
                WinnerOn();
                isPaused=true;
            }
        }
        players[0].snake.unshift([head[0]+players[0].yV,head[1]+players[0].xV]);
    
        if(PLAYER_NUM==2){
            head = players[1].snake[0];
        let isConflict = 0;
        if((head[0]+players[1].yV==players[0].apple[0])&&(head[1]+players[1].xV==players[0].apple[1]))
            {
                eatApple+=1;
                createRandomApple(players[0]);
            }
            else if((head[0]+players[1].yV==players[1].apple[0])&&(head[1]+players[1].xV==players[1].apple[1]))
            {
                eatApple+=1;
                createRandomApple(players[1]);
            }
            else players[1].snake.pop();
    
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
            if(PLAYER_NUM==1){
                gameOver();
            }
            if(PLAYER_NUM==2)
            {
                let Winner = document.querySelector("#Winner");
                Winner.innerHTML = "Player 1";
                WinnerOn();
                isPaused=true;
            }
        }
        players[1].snake.unshift([head[0]+players[1].yV,head[1]+players[1].xV]);
    
        }
    }

function drawSnake(){
    for ( let s of players[0].snake){
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

function isOptimal(direction){

    if ((head[0] < players[0].apple[0]) ){
        if(direction.join("") === [1,0].join("")){return true;}
    }
    if ((head[0] > players[0].apple[0]) ){
        if(direction.join("") === [-1,0].join("")){return true;}
    }
    if ((head[1] < players[0].apple[1]) ){
        if(direction.join("") === [0,1].join("")){return true;}
    }
    if ((head[1] > players[0].apple[1]) ){
        if(direction.join("") === [0,-1].join("")){return true;}
    }
    return false;
}
function isConflictWall(h, d){
    if (h[0]+d[0]<0 || h[0]+d[0]>39 || h[1]+d[1]<0 || h[1]+d[1]>39){ return true;
    }
    return false;
}

function isConflictSnake(snakeBody,h,d){
    for ( let s of snakeBody){
        if( (s[0]=== h[0]+d[0]) && (s[1]===h[1]+d[1])){
            return true;
        }
    }
    return false;
}

function isVisited(node,d,visited){
    for ( let v of visited){
        if((node[0]+d[0])===v[0]&&(node[1]+d[1])===v[1]){
            return true;
        }
    }
    return false;

}

function dfs(head,sub){
    let minWeight=MEDIUM*2;
   
        //bfs로 가중치
    let subPath=1;
    let subDfs=[[head[0]+sub[0],head[1]+sub[1]]];
    let visited = [...subDfs[0]];
    while(subDfs.length!=0 ){
        let n = subDfs.length;
        for ( let i = 0; i < n; i++){
            let node = subDfs.shift();
            if(node[0]===players[0].apple[0] && node[1]===players[0].apple[1]){
                return subPath;
            }
            for ( let dir of directions){
                if(isConflictSnake(players[0].snake,node,dir) || isConflictWall(node,dir)|| isVisited(node,dir,visited)){
                    continue;
                }
                visited.push([node[0]+dir[0],node[1]+dir[1]]);
                subDfs.push([node[0]+dir[0],node[1]+dir[1]]);
            }
        }
        console.log(subDfs);
        subPath+=1;
    }

    // 사과를 발견하지 못하고 끝나는 경우
    return MEDIUM*2;
}

// Default logic to apple
function autoDirection(){
    let subDirections=[];
    if (players[0].yV===0){ directions = [[0,1],[0,-1],[1,0],[-1,0]]; }
    else {  directions = [[1,0],[-1,0],[0,1],[0,-1]]; }

    // Search optimize direction
    for ( let dir of directions){
        let isBlock=0;
        if (isConflictWall(head,dir)){
            continue;
        }
        if (isConflictSnake(players[0].snake,head,dir)){ 
            isBlock+=1;

        }
        if(isBlock===0){
            subDirections.push([dir[0],dir[1]]);
            if (isOptimal(dir)) { 
                players[0].yV = dir[0];
                players[0].xV = dir[1];
                return ; }
        }
        
    }
    let asap = MEDIUM*2;
    for ( let subDirection of subDirections){
        let dfsPath=dfs(head,subDirection)
        if (asap > dfsPath){
            asap = dfsPath;
            players[0].yV = subDirection[0];
            players[0].xV = subDirection[1];
        };
    }
    
    // block 가중치 반영
    // let minWeight=MEDIUM*2;
    // for ( sub of subDirections){

    //     if ( minWeight>Math.abs(players[0].apple[0]-(head[0]+sub[0]))+Math.abs(players[0].apple[1]-(head[1]+sub[1]))){
    //         minWeight = Math.abs(players[0].apple[0]-(head[1]+sub[1]))+Math.abs(players[0].apple[1]-(head[1]+sub[1]));
    //         players[0].yV = sub[0];
    //         players[0].xV = sub[1];
    //     }
    // }
}

function testApple(){
    apple=[snake[0][0]-10,snake[0][1]];
}
