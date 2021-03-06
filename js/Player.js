class Player{
  constructor(){
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  addPlayer(){

  if(this.index == 1){
    this.positionX = 50
    this.positionY = 50
  }
  else {
    this.positionX = width - 50
    this.positionY = height - 50
  }
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY
    })
  }
   static getInfo(){
     var playerInfo = database.ref("players");
     playerInfo.on("value",data => {
       allPlayers = data.val();
     })
   }
   playerControls(){
     if(keyIsDown(UP_ARROW)){
       player.positionY = player.positionY - 2;
     }
     if(keyIsDown(DOWN_ARROW)){
       player.positionY = player.positionY + 2;
     }
      if(keyIsDown(LEFT_ARROW)){
        player.positionX = player.positionX - 2;
      }
      if(keyIsDown(RIGHT_ARROW)){
        player.positionX = player.positionX + 2;
      }
   }
}