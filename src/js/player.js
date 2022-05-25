function Player(snake_startPosition, XLocation, YLocation,apple_startPosition){
    this.snake = [snake_startPosition];
    this.xV = XLocation;
    this.yV = YLocation;
    this.apple = apple_startPosition;
}
var players = [[new Player]];