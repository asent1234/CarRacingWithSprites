var gameState = 0, playerCount = 0, screenState = 0
var player, game, form, allPlayers, distance = 0
var carset = [], car1 , car2
var database   
function setup(){

    createCanvas( 1000, 1000)
    database = firebase.database();
    game = new Game()
    game.getGS();
    game.start();

    //player = new Player

}
function draw(){
    if(playerCount === 2){
      game.updateGS(1);
    }
    if(gameState === 1){
        clear();
        game.play();
        drawSprites();
    }
    //if(screenState === 1){
    //    createCanvas(displayWidth, displayHeight)
    //    game.play();
   /// }
}