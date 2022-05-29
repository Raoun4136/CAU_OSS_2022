//reset Options to restart,exit,init
function resetOptions(){
    isGaming = false;
    time = 0;
    score = 0;
    loadTime = 0;
    eatApple = 0;
    start = new Date();
    if(PLAYER_NUM==1)
    {
    players[0].apple = [createApple(1,39),createApple(1,39)];
    players[0].snake = [[Math.round(tileCount/2),Math.round(tileCount/2)]];
    players[0].xV = 0;
    players[0].yV = -1;
    }
    if(PLAYER_NUM==2)
    {
        players[0]= new Player([0,0],0,1,[-1,-1]);
        players[1] = new Player([39,79],0,-1,[-2,-2]);  
        players[0].apple = [createApple(1,39),createApple(1,39)];
        players[1].apple = [createApple(1,39),createApple(1,39)];
    }
    //TODO make function to set option
    //TODO error for 1000ms drawGmae();
}