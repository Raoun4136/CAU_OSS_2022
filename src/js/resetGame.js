//reset Options to restart,exit,init
function resetOptions(){
    isGaming = false;
    apple = [createApple(1,39),createApple(1,39)];
    snake = [[Math.round(tileCount/2),Math.round(tileCount/2)]]
    time = 0;
    score = 0;
    loadTime = 0;
    eatApple = 0;
    start = new Date();
    players[0].xV = 0;
    players[0].yV = -1;
    //TODO make function to set option
    //TODO error for 1000ms drawGmae();

}