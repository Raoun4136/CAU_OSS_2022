function auto() {
    autoSnake = players[0].snake;
    autoApple = players[0].apple;

    if (autoSnake[0][0] != autoApple[0])
    {
        // up
        if (autoSnake[0][0]> autoApple[0]) {

            console.log("up")
            moveUp()
            if (players[0].xV == 0 && players[0].yV == 1)
            {
                if(autoSnake[0][1] >= 20)
                    moveLeft();
                else
                    moveRight();
            }
        }
        // down
        else if (autoSnake[0][0] <= autoApple[0]) {
            console.log("down")
            moveDown()
            if (players[0].xV == 0 && players[0].yV == -1)
            {
                if(autoSnake[0][1] >= 20)
                    moveLeft();
                else
                    moveRight();
            }
        }
    }
    else
    {
        //right
        if (autoSnake[0][1] < autoApple[1])
        {
            console.log("right")
            moveRight();
            if (players[0].xV == -1 && players[0].yV == 0)
            {
                if(autoSnake[0][0] >= 20)
                    moveUp();
                else
                    moveDown();
            }
        }
        //left
        else
        {
            console.log("left")
            moveLeft();
            if (players[0].xV == 1 && players[0].yV == 0)
            {
                if(autoSnake[0][0] >= 20)
                    moveUp();
                else
                    moveDown();
            }
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