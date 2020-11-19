var player,player2;
function setup() {
  createCanvas(800,400);
 player = createSprite(400, 200, 50, 50);
 player2 = createSprite(200,300,50,50);
}

function draw() {
  background("blue");  
  drawSprites();
  player.y=mouseY;
  player.x=mouseX;
  player.velocityX=2;
  player.velocityY=2;
  player2.velocityX=3;
  player2.velocityY=3;
  if(player.x-player2.x<=player.width/2+player2.width/2&& player2.x-player.x<=player.width/2+player2.width/2){
    player.velocityX*=-1;
    player2.velocityX*=-1;
  }
  if(player.y-player2.y<=player.height/2+player2.height/2&& player2.y-player.y<=player.height/2+player2.height/2){
     player.velocityY*=-1;
     player2.velocityY=player2.velocityY*-1;
  }
}