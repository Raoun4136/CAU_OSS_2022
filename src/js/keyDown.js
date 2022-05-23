document.body.addEventListener('keydown',keyDown);

function keyDown(event){
    //keyboard left
    if(event.keyCode == 37){
        if(p1.xV == 1) return;
        if(isSnakeChanged) return;
        isSnakeChanged = true;
        p1.xV = -1;
        p1.yV = 0;
    }
    //keyboard up
    if(event.keyCode == 38){
        if(p1.yV == 1) return;
        if(isSnakeChanged) return;
        isSnakeChanged = true;
        p1.xV = 0;
        p1.yV = -1;
        
    }
    //keyboard right
    if(event.keyCode == 39){
        if(p1.xV == -1) return;
        if(isSnakeChanged) return;
        isSnakeChanged = true;
        p1.xV = 1;
        p1.yV = 0;
    }
    //keyboard down
    if(event.keyCode == 40){
        if(p1.yV == -1) return;
        if(isSnakeChanged) return;
        isSnakeChanged = true;
        p1.xV = 0;
        p1.yV = 1;
    }
    //keyboard left
    if(event.keyCode == 65){
        if(p2.xV == 1) return;
        if(isSnakeChanged) return;
        isSnakeChanged = true;
        p2.xV = -1;
        p2.yV = 0;
    }
    //keyboard up
    if(event.keyCode == 87){
        if(p2.yV == 1) return;
        if(isSnakeChanged) return;
        isSnakeChanged = true;
        p2.xV = 0;
        p2.yV = -1;
        
    }
    //keyboard right
    if(event.keyCode == 68){
        if(p2.xV == -1) return;
        if(isSnakeChanged) return;
        isSnakeChanged = true;
        p2.xV = 1;
        p2.yV = 0;
    }
    //keyboard down
    if(event.keyCode == 83){
        if(p2.yV == -1) return;
        if(isSnakeChanged) return;
        isSnakeChanged = true;
        p2.xV = 0;
        p2.yV = 1;
    }

    //keyboard P
    if(event.keyCode == 80){
        if(isGameOver) return;
        if(isGaming){ // Pause Game
            isGaming = false;
            isPaused = true;
            gamePauseOn();
        }
        else{ // Resume Game
            if(isSaving)return;
            if(isLoading)return;
            if(isRanking)return;
            if(isPaused){
                isPaused = false;
                isGaming = true;
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
            p1 = new Player(snake_startPosition,0,-1);
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
            p1 = new Player(snake_startPosition,0,-1);
            p2 = new Player(snake_startPosition,0,1);
            isSelect = false;
            is1Player = false;
            isGaming = true;
            isStarted = true;
            gameOn();
        }
    }
    //keyboard M
    if(event.keyCode == 77){
        isStarted = false;
        isSaving = false;
        isPaused = false;
        isGameOver = false;
        isLoading = false;
        isRanking = false;
        isSelect = true;
        resetOptions();
        drawScore();
        gameInterfaceOn();
        clearScreen();
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
        if(isStarted) return;
        if(isGameOver) return;
        if(isLoading){ // Back to interface
            isLoading = false;
            gameInterfaceOn();
        }
        else{ // Load game
            isLoading = true;
            gameLoadOn();
        }
    }

    //keyboard K
    if(event.keyCode == 75){
        if(isStarted) return;
        if(isGameOver) return;
        if(isRanking){ // Back to interface
            isRanking = false;
            gameInterfaceOn();
        }
        else{ // View Ranking
            isRanking = true;
            gameRankingOn();
        }
    }

    //keyboard R
    if(event.keyCode == 82){
        if(!isStarted) return;
        if(isGameOver) return;
        resetOptions();
        isGaming = true;
        gameOn();
    }
}