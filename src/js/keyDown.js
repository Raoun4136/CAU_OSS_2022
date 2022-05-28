document.body.addEventListener('keydown',keyDown);

function keyDown(event){
    //keyboard left
    if(event.keyCode == 37){
        if(players[0].xV == 1) return;
        if(isSnakeChanged) return;
        isSnakeChanged = true;
        players[0].xV = -1;
        players[0].yV = 0;
    }
    //keyboard up
    if(event.keyCode == 38){
        if(players[0].yV == 1) return;
        if(isSnakeChanged) return;
        isSnakeChanged = true;
        players[0].xV = 0;
        players[0].yV = -1;
        
    }
    //keyboard right
    if(event.keyCode == 39){
        if(players[0].xV == -1) return;
        if(isSnakeChanged) return;
        isSnakeChanged = true;
        players[0].xV = 1;
        players[0].yV = 0;
    }
    //keyboard down
    if(event.keyCode == 40){
        if(players[0].yV == -1) return;
        if(isSnakeChanged) return;
        isSnakeChanged = true;
        players[0].xV = 0;
        players[0].yV = 1;
    }
    //keyboard left
    if(event.keyCode == 65){
    if(PLAYER_NUM==2){        
        if(players[1].xV == 1) return;
        if(isSnakeChanged) return;
        isSnakeChanged = true;
        players[1].xV = -1;
        players[1].yV = 0;
    }
    }
    //keyboard up
    if(event.keyCode == 87){
    if(PLAYER_NUM==2){
        if(players[1].yV == 1) return;
        if(isSnakeChanged) return;
        isSnakeChanged = true;
        players[1].xV = 0;
        players[1].yV = -1;   
    }
    }
    //keyboard right
    if(event.keyCode == 68){
    if(PLAYER_NUM==2){
        if(players[1].xV == -1) return;
        if(isSnakeChanged) return;
        isSnakeChanged = true;
        players[1].xV = 1;
        players[1].yV = 0;
    }
    }
    //keyboard down
    if(event.keyCode == 83){
    if(PLAYER_NUM==2){
        if(players[1].yV == -1) return;
        if(isSnakeChanged) return;
        isSnakeChanged = true;
        players[1].xV = 0;
        players[1].yV = 1;
    }
    }

    //keyboard P
    if(event.keyCode == 80){
        if(isGameOver) return;
        if(isGaming){ // Pause Game
            isGaming = false;
            isPaused = true;
            pauseOnTime = new Date();
            gamePauseOn();
        }
        else{ // Resume Game
            if(isSaving)return;
            if(isLoading)return;
            if(isRanking)return;
            if(isPaused){
                isPaused = false;
                isGaming = true;
                pauseOffTime = new Date();
                pauseTime += (pauseOffTime - pauseOnTime);
                gameOn();
                return;
            }
            else{
            isSelect = true;
            selectModeOn();            
            }
        }
    }
    //keyboard 1 (in Player mode select)
    if(event.keyCode == 49){
        if(isSelect){
            if(!isStarted){
                start = new Date(); // date update when game start
            }
            PLAYER_NUM=1;
            players[0] = new Player(snake_startPosition,0,-1,apple_startPosition);
            setGameScreen();
            isSelect = false;
            isGaming = true;
            isStarted = true;
            gameOn();
        }
        
    }
     //keyboard 2 (in Player mode select)
    if(event.keyCode == 50){
        if(isSelect){
            if(!isStarted){
                start = new Date(); // date update when game start
            }
            PLAYER_NUM = 2;
            setGameScreen();
            players[0]= new Player([0,0],0,1,[-1,-1]);
            players[1] = new Player([39,79],0,-1,[-2,-2]);
            
            isSelect = false;
            isGaming = true;
            isStarted = true;
            gameOn();
            countTileSize();
            createRandomApple(players[0]);
            createRandomApple(players[1]);
        }
    }
    //keyboard M
    if(event.keyCode == 77){
        if(isPaused)
            window.location.reload();
    }
    //keyboard ESC
    if(event.keyCode == 27){
        //EXIT
        var confirmflag = confirm("Are you want to exit?");
        if(confirmflag)
            window.close();
    }
    // keyboard S
    if(event.keyCode == 83){
        if(isGaming) return;
        if(!isStarted) return;
        if(isGameOver) return;
        if(isSaving){ // Back to pause
            isSaving = false;
            gamePauseOn();
        }
        else{ // Save game
            isSaving = true;
            gameSaveOn();
        }
        //TODO How to make keyCode InActive when entering Name "S,R"?
    }

    // keyboard L
    if(event.keyCode == 76){
        if(isLoading){ // Back to interface
            isLoading = false;
            isSelect = true;
            gameInterfaceOn();
        }
       else if(isSelect)
       {
         // Load game
            isLoading = true;
            isSelect = false;
            gameLoadOn();
        }
    }

    //keyboard K
    if(event.keyCode == 75){
        if(isRanking){ // Back to interface
            isRanking = false;
            gameInterfaceOn();
        }
        else if(isSelect){ // View Ranking
            isRanking = true;
            gameRankingOn();
        }
    }

    //keyboard R
    if(event.keyCode == 82){
        if(!isStarted) return;
        if(isGameOver) return;
        if(isPaused)
        {
        isPaused=false;
        resetOptions();
        isGaming = true;
        gameOn();
        if(PLAYER_NUM==2)
        {
            countTileSize();
            createRandomApple(players[0]);
            createRandomApple(players[1]);
        }
        }
    }
}