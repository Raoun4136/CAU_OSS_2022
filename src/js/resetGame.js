//reset Options to restart
function resetOptions(){
    isGaming = false;
    apple = [createApple(1,39),createApple(1,39)];
    snake = [[Math.round(tileCount/2),Math.round(tileCount/2)]]
    xV = 0;
    yV = -1;
    //TODO make function to set option
    //TODO error for 1000ms drawGmae();
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.remove("hide");
}