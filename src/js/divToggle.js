function gameOn(){
    document.getElementById("game").classList.remove("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.add("hide");
    document.getElementById("game_load").classList.add("hide");
    document.getElementById("game_save").classList.add("hide");
    document.getElementById("game_ranking").classList.add("hide");
    document.getElementById("game_over").classList.add("hide");
}

function gameInterfaceOn(){
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.remove("hide");
    document.getElementById("game_load").classList.add("hide");
    document.getElementById("game_save").classList.add("hide");
    document.getElementById("game_ranking").classList.add("hide");
    document.getElementById("game_over").classList.add("hide");
}

function gamePauseOn(){
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_pause").classList.remove("hide");
    document.getElementById("game_interface").classList.add("hide");
    document.getElementById("game_load").classList.add("hide");
    document.getElementById("game_save").classList.add("hide");
    document.getElementById("game_ranking").classList.add("hide");
    document.getElementById("game_over").classList.add("hide");
}

function gameLoadOn(){
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.add("hide");
    document.getElementById("game_load").classList.remove("hide");
    document.getElementById("game_save").classList.add("hide");
    document.getElementById("game_ranking").classList.add("hide");
    document.getElementById("game_over").classList.add("hide");
}

function gameSaveOn(){
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.add("hide");
    document.getElementById("game_load").classList.add("hide");
    document.getElementById("game_save").classList.remove("hide");
    document.getElementById("game_ranking").classList.add("hide");
    document.getElementById("game_over").classList.add("hide");
}
function gameRankingOn(){
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.add("hide");
    document.getElementById("game_load").classList.add("hide");
    document.getElementById("game_save").classList.add("hide");
    document.getElementById("game_ranking").classList.remove("hide");
    document.getElementById("game_over").classList.add("hide");
}
function gameOverOn(){
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.add("hide");
    document.getElementById("game_load").classList.add("hide");
    document.getElementById("game_save").classList.add("hide");
    document.getElementById("game_ranking").classList.add("hide");
    document.getElementById("game_over").classList.remove("hide");
}