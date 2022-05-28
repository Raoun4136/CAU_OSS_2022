function auto() {
    autoSnake = players[0].snake;
    autoApple = players[0].apple;

    if (autoSnake[0][0] != autoApple[0])
    {
        // up
        if (autoSnake[0][0]> autoApple[0]) {
            console.log("up")
            moveUp()
        }
        // down
        else if (autoSnake[0][0] <= autoApple[0]) {
            console.log("down")
            moveDown()
        }
    }
    else
    {
        //right
        if (autoSnake[0][1] < autoApple[1])
        {
            console.log("right")
            moveRight();
        }
        //left
        else
        {
            console.log("left")
            moveLeft();
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