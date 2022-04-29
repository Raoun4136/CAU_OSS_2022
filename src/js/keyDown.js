document.body.addEventListener('keydown',keyDown);

function keyDown(event){
    //keyboard left
    if(event.keyCode == 37){
        if(xV == 1) return;
        xV = -1;
        yV = 0;
    }
    //keyboard up
    if(event.keyCode == 38){
        if(yV == 1) return;
        xV = 0;
        yV = -1;
    }
    //keyboard right
    if(event.keyCode == 39){
        if(xV == -1) return;
        xV = 1;
        yV = 0;
    }
    //keyboard down
    if(event.keyCode == 40){
        if(yV == -1) return;
        xV = 0;
        yV = 1;
    }
    //keyboard P
    if(event.keyCode == 80){
        if(isGaming){ // Pause Game
            isGaming = false;
            document.getElementById("game").classList.add("hide");
            document.getElementById("game_pause").classList.remove("hide");
        }
        else{ // Resume Game
            isGaming = true;
            document.getElementById("game").classList.remove("hide");
            document.getElementById("game_pause").classList.add("hide");
            document.getElementById("game_interface").classList.add("hide");
        }
    }
    //keyboard r
    if(event.keyCode == 82){
        //restart
        resetOptions();
        clearScreen();
    }
    // test- keyboard S
    if(event.keyCode == 83){
        saveSnake(event, 0); //test
    }

}