function changeSnakePosition(){
    head = players[0].snake[0];
    let Winner = document.querySelector("#Winner");
    WinnerDecided = 0;
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
                Winner.innerHTML = "Player 2";
                WinnerDecided = 1;
                WinnerOn();
                isGaming = false;
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
            if(PLAYER_NUM==2&&WinnerDecided==0)
            {
                Winner.innerHTML = "Player 1";
                WinnerOn();
                isGaming = false;
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

function bfsDirection(head,sub){
    
    let subBfs=[];
    console.log(sub.length);
    for ( let j= 0; j<sub.length;j++){
        subBfs.push([head[0]+sub[j][0],head[1]+sub[j][1],sub[j]]);
    }

    let visited = [...subBfs];
    while(subBfs.length!=0 ){
        let n = subBfs.length;
        for ( let i = 0; i < n; i++){
            let node = subBfs.shift();
            if(node[0]===players[0].apple[0] && node[1]===players[0].apple[1]){
                players[0].yV = node[2][0];
                players[0].xV = node[2][1];
                return ; 
            }
            for ( let dir of directions){
                if(isConflictSnake(players[0].snake,node,dir) || isConflictWall(node,dir)|| isVisited(node,dir,visited)){
                    continue;
                }
                visited.push([node[0]+dir[0],node[1]+dir[1],node[2]]);
                subBfs.push([node[0]+dir[0],node[1]+dir[1],node[2]]);
            }
        }
    }
    // 사과에 도달할 수 없다고 판단하는 경우
    // 빈칸이 존재한다면 진행,  subPath가 더 큰 쪽(== 공간이 더 많은) subDireciron 방향으로 진행
    // 마지막으로 visit한 위치가 가장 path가 길다.
    lastVisit=visited.pop();
    players[0].yV = lastVisit[2][0];
    players[0].xV = lastVisit[2][1];
    
    return ;
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
        }
        
    }
    //사방이 가로막힘
    if(subDirections.length===0){
        console.log("cant go");
        gameOver();
        return ;
    }
    players[0].yV=subDirections[0][0];
    players[0].xV=subDirections[0][1];
    bfsDirection(head,subDirections);
}

function testApple(){
    apple=[snake[0][0]-10,snake[0][1]];
}
