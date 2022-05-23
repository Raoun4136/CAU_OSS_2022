document.body.addEventListener('keydown',keyDown);

function keyDown(event){
    //keyboard left
    if(event.keyCode == 37){
        if(xV == 1) return;
        if(isSnakeChanged) return;
        isSnakeChanged = true;
        xV = -1;
        yV = 0;
    }
    //keyboard up
    if(event.keyCode == 38){
        if(yV == 1) return;
        if(isSnakeChanged) return;
        isSnakeChanged = true;
        xV = 0;
        yV = -1;
        
    }
    //keyboard right
    if(event.keyCode == 39){
        if(xV == -1) return;
        if(isSnakeChanged) return;
        isSnakeChanged = true;
        xV = 1;
        yV = 0;
    }
    //keyboard down
    if(event.keyCode == 40){
        if(yV == -1) return;
        if(isSnakeChanged) return;
        isSnakeChanged = true;
        xV = 0;
        yV = 1;
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
            isSelect = false;
            isGaming = true;
            isStarted = true;
            console.log(snake[0]);
            gameOn();
        }
        
    }
     //keyboard 2 (in Player mode select)
    if(event.keyCode == 50){
        if(isSelect){
            if(!isStarted){
                start = new Date(); // date update when game start
            }
            isSelect = false;
            isGaming = true;
            isStarted = true;
            var p1 = new Player(snake,0,-1);
            var p2 = new Player(snake,0,1);
            console.log(p1.snake[0]);
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