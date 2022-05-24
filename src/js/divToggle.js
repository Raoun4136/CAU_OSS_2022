function selectModeOn(){
    document.getElementById("game_select_playerMode_interface").classList.remove("hide");
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.add("hide");
    document.getElementById("game_load").classList.add("hide");
    document.getElementById("game_save").classList.add("hide");
    document.getElementById("game_ranking").classList.add("hide");
    document.getElementById("game_over").classList.add("hide");
}

function gameOn(){
    document.getElementById("game").classList.remove("hide");
    document.getElementById("game_select_playerMode_interface").classList.add("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.add("hide");
    document.getElementById("game_load").classList.add("hide");
    document.getElementById("game_save").classList.add("hide");
    document.getElementById("game_ranking").classList.add("hide");
    document.getElementById("game_over").classList.add("hide");
}

function gameInterfaceOn(){
    document.getElementById("game_select_playerMode_interface").classList.add("hide");
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.remove("hide");
    document.getElementById("game_load").classList.add("hide");
    document.getElementById("game_save").classList.add("hide");
    document.getElementById("game_ranking").classList.add("hide");
    document.getElementById("game_over").classList.add("hide");
}

function gamePauseOn(){
    document.getElementById("game_select_playerMode_interface").classList.add("hide");
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_pause").classList.remove("hide");
    if(isAuto){
        document.getElementById("game_pause").getElementsByClassName("save")[0].classList.add("hide");
    }
    document.getElementById("game_interface").classList.add("hide");
    document.getElementById("game_load").classList.add("hide");
    document.getElementById("game_save").classList.add("hide");
    document.getElementById("game_ranking").classList.add("hide");
    document.getElementById("game_over").classList.add("hide");
}

function gameLoadOn(){
    document.getElementById("game_select_playerMode_interface").classList.add("hide");
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.add("hide");
    document.getElementById("game_load").classList.remove("hide");
    document.getElementById("game_save").classList.add("hide");
    document.getElementById("game_ranking").classList.add("hide");
    document.getElementById("game_over").classList.add("hide");
    loadSnake();
}

function gameSaveOn(){
    document.getElementById("game_select_playerMode_interface").classList.add("hide");
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.add("hide");
    document.getElementById("game_load").classList.add("hide");
    document.getElementById("game_save").classList.remove("hide");
    document.getElementById("game_ranking").classList.add("hide");
    document.getElementById("game_over").classList.add("hide");
}
function gameRankingOn(){
    document.getElementById("game_select_playerMode_interface").classList.add("hide");
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.add("hide");
    document.getElementById("game_load").classList.add("hide");
    document.getElementById("game_save").classList.add("hide");
    document.getElementById("game_ranking").classList.remove("hide");
    document.getElementById("game_over").classList.add("hide");
    viewRanking();
}
function gameOverOn(){
    document.getElementById("game_select_playerMode_interface").classList.add("hide");
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.add("hide");
    document.getElementById("game_load").classList.add("hide");
    document.getElementById("game_save").classList.add("hide");
    document.getElementById("game_ranking").classList.add("hide");
    document.getElementById("game_over").classList.remove("hide");
}