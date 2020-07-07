class Game{
    constructor(){

    }
    getGS(){
    var gsrefer = database.ref('gameState')
    gsrefer.on("value", function(data){
        gameState = data.val();  
    });
    }
    
    updateGS(state){
        var updategsref = database.ref('/')
        updategsref.update({
            gameState: state
        });
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getPC();
            form = new Form 
            form.display(); 
        }
        car1 = createSprite(100,displayHeight,50,50)
        car2 = createSprite(200,displayHeight,50,50)
        carset = [car1, car2]

    }
    play(){
        form.hide();
        text("The Game will Begin in, 3 seconds", 120, 100)
        Player.getAllPlayerInfo();

        if(allPlayers !== undefined ){
            var playersy = 200
            var boardy = 130
            var playersx = 100
            var index = 0
            
            //car + playerindex 
            for(var plr in allPlayers){
                playersy = displayHeight - allPlayers[plr].distance
                carset[index].x = playersx
                carset[index].y = playersy
                if(plr === "player" + player.index){
                    fill("red")
                    carset[index].shapeColor = "red"
                    camera.position.x = 400
                    camera.position.y = carset[index].y
                }
                else{
                    fill("black")
                    
                }
                boardy = boardy + 20
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 100, boardy)

            index = index + 1
            playersx = playersx + 100

            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 20
            player.updatePlayerInfo();
        }
        

    }
    

}