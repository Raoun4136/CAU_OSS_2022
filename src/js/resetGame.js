//reset Options to restart,exit,init
function resetOptions(){
    isGaming = false;
    apple = [createApple(1,20),createApple(1,20)];
    snake = [[Math.round(tileCount/2),Math.round(tileCount/2)]]
    time = 0;
    score = 0;
    eatApple = 0;
    start = new Date();
    xV = 0;
    yV = -1;
    //TODO make function to set option
    //TODO error for 1000ms drawGmae();

}