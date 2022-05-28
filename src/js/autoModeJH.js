function auto(){
    autoSnake = players[0].snake;
    autoApple = players[0].apple;
    console.log(autoSnake)
    console.log(autoApple)
    // up and right move
    if(autoSnake[0][0] > autoApple[0] && autoSnake[0][1] < autoApple[1])
    {
        console.log("in up and right")
        while(players[0].snake[0][0] != players[0].apple[0])
        {
            console.log(players[0].snake[0][0], players[0].apple[0])
            moveUp()
        }
        console.log("up end")
        while(players[0].snake[0][1] != players[0].apple[1])
        {
            moveRight()
        }
    }
    // up and left move
    else if(autoSnake[0][0] > autoApple[0] && autoSnake[0][1] >= autoApple[1])
    {
        console.log("in up and left")
        while(autoSnake[0][0] != autoApple[0])
        {
            //if(players[0].yV == 1) return;
            if(isSnakeChanged) return;
            isSnakeChanged = true;
            players[0].xV = 0;
            players[0].yV = -1;
        }
        while(autoSnake[0][1] != autoApple[1])
        {
            //if(players[0].xV == 1) return;
            if(isSnakeChanged) return;
            isSnakeChanged = true;
            players[1].xV = -1;
            players[1].yV = 0;
        }
    }
    // down and right move
    else if(autoSnake[0][0] <= autoApple[0] && autoSnake[0][1] < autoApple[1])
    {
        console.log("down and right")
        while(autoSnake[0][0] != autoApple[0])
        {
            //if(players[0].yV == -1) return;
            if(isSnakeChanged) return;
            isSnakeChanged = true;
            players[0].xV = 0;
            players[0].yV = 1;
        }
        while(autoSnake[0][1] != autoApple[1])
        {
            //if(players[0].xV == -1) return;
            if(isSnakeChanged) return;
            isSnakeChanged = true;
            players[0].xV = 1;
            players[0].yV = 0;
        }
    }
    // down and left move
    else
    {
        console.log("down and left")
        while(autoSnake[0][0] != autoApple[0])
        {
            //if(players[0].yV == -1) return;
            if(isSnakeChanged) return;
            isSnakeChanged = true;
            players[0].xV = 0;
            players[0].yV = 1;
        }
        while(autoSnake[0][1] != autoApple[1])
        {
            //if(players[1].xV == 1) return;
            if(isSnakeChanged) return;
            isSnakeChanged = true;
            players[1].xV = -1;
            players[1].yV = 0;
        }
    }
}
function moveUp()
{
    if(players[0].yV == 1) return;
    if(isSnakeChanged) return;
    isSnakeChanged = true;
    players[0].xV = 0;
    players[0].yV = -1;
}

function moveDown()
{
    if(players[0].yV == -1) return;
    if(isSnakeChanged) return;
    isSnakeChanged = true;
    players[0].xV = 0;
    players[0].yV = 1;
}

function moveLeft()
{
    if(players[0].xV == 1) return;
    if(isSnakeChanged) return;
    isSnakeChanged = true;
    players[0].xV = -1;
    players[0].yV = 0;
}

function moveRight()
{
    if(players[0].xV == -1) return;
    if(isSnakeChanged) return;
    isSnakeChanged = true;
    players[0].xV = 1;
    players[0].yV = 0;
}