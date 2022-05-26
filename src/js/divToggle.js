function selectModeOn(){
    document.getElementById("game_select_playerMode_interface").classList.remove("hide");
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_for2p").classList.add("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.add("hide");
    document.getElementById("game_load").classList.add("hide");
    document.getElementById("game_save").classList.add("hide");
    document.getElementById("game_ranking").classList.add("hide");
    document.getElementById("game_over").classList.add("hide");
    document.getElementById("2_PlayerMode_Winner").classList.add("hide");
}

function gameOn(){
    if(PLAYER_NUM==1)
    {
        document.getElementById("game").classList.remove("hide");
        document.getElementById("game_for2p").classList.add("hide");
        document.getElementById("game_score").classList.remove("hide");
    }
    if(PLAYER_NUM==2)
    {
        document.getElementById("game").classList.add("hide");
        document.getElementById("game_for2p").classList.remove("hide");
    }
    document.getElementById("game_select_playerMode_interface").classList.add("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.add("hide");
    document.getElementById("game_load").classList.add("hide");
    document.getElementById("game_save").classList.add("hide");
    document.getElementById("game_ranking").classList.add("hide");
    document.getElementById("game_over").classList.add("hide");
    document.getElementById("2_PlayerMode_Winner").classList.add("hide");
}

function gameInterfaceOn(){
    document.getElementById("game_select_playerMode_interface").classList.add("hide");
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_for2p").classList.add("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.remove("hide");
    document.getElementById("game_load").classList.add("hide");
    document.getElementById("game_save").classList.add("hide");
    document.getElementById("game_ranking").classList.add("hide");
    document.getElementById("game_over").classList.add("hide");
    document.getElementById("2_PlayerMode_Winner").classList.add("hide");
}

function gamePauseOn(){
    document.getElementById("game_select_playerMode_interface").classList.add("hide");
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_for2p").classList.add("hide");
    document.getElementById("game_pause").classList.remove("hide");
    document.getElementById("game_interface").classList.add("hide");
    document.getElementById("game_load").classList.add("hide");
    document.getElementById("game_save").classList.add("hide");
    document.getElementById("game_ranking").classList.add("hide");
    document.getElementById("game_over").classList.add("hide");
    document.getElementById("2_PlayerMode_Winner").classList.add("hide");
}

function gameLoadOn(){
    document.getElementById("game_select_playerMode_interface").classList.add("hide");
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_for2p").classList.add("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.add("hide");
    document.getElementById("game_load").classList.remove("hide");
    document.getElementById("game_save").classList.add("hide");
    document.getElementById("game_ranking").classList.add("hide");
    document.getElementById("game_over").classList.add("hide");
    document.getElementById("2_PlayerMode_Winner").classList.add("hide");
    loadSnake();
}

function gameSaveOn(){
    document.getElementById("game_select_playerMode_interface").classList.add("hide");
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_for2p").classList.add("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.add("hide");
    document.getElementById("game_load").classList.add("hide");
    document.getElementById("game_save").classList.remove("hide");
    document.getElementById("game_ranking").classList.add("hide");
    document.getElementById("game_over").classList.add("hide");
    document.getElementById("2_PlayerMode_Winner").classList.add("hide");
}
function gameRankingOn(){
    document.getElementById("game_select_playerMode_interface").classList.add("hide");
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_for2p").classList.add("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.add("hide");
    document.getElementById("game_load").classList.add("hide");
    document.getElementById("game_save").classList.add("hide");
    document.getElementById("game_ranking").classList.remove("hide");
    document.getElementById("game_over").classList.add("hide");
    document.getElementById("2_PlayerMode_Winner").classList.add("hide");
    viewRanking();
}
function gameOverOn(){
    document.getElementById("game_select_playerMode_interface").classList.add("hide");
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_for2p").classList.add("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.add("hide");
    document.getElementById("game_load").classList.add("hide");
    document.getElementById("game_save").classList.add("hide");
    document.getElementById("game_ranking").classList.add("hide");
    document.getElementById("game_over").classList.remove("hide");
    document.getElementById("2_PlayerMode_Winner").classList.add("hide");
}

function WinnerOn(){
    document.getElementById("game_select_playerMode_interface").classList.add("hide");
    document.getElementById("game").classList.add("hide");
    document.getElementById("game_for2p").classList.add("hide");
    document.getElementById("game_pause").classList.add("hide");
    document.getElementById("game_interface").classList.add("hide");
    document.getElementById("game_load").classList.add("hide");
    document.getElementById("game_save").classList.add("hide");
    document.getElementById("game_ranking").classList.add("hide");
    document.getElementById("game_over").classList.add("hide");
    document.getElementById("2_PlayerMode_Winner").classList.remove("hide");    
}