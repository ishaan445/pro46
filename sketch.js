var bg, backgroundImg,platformImage,platformGroup;
var diamondImage,diamondsGroup;
var spikeImage,spikesGroup;
var score =0;
var gameState ="PLAY";

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironImage = loadImage("images/iron.png");
  platformImage = loadImage("images/stone.png");
  diamondImage = loadImage("images/diamond.png");
  spikeImage = loadImage("images/spikes.png");
  restartImage = loadImage("images/restart.png");
  }

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale =2;
  bg.velocityY=6;
 
  ironMan = createSprite(200, 505, 20, 50);
  ironMan.addImage("running", ironImage);
  ironMan.scale = 0.3;
  ironMan.setCollider("rectangle",100,0,200,400)
  platformGroup = new Group();
  diamondsGroup = new Group();
  spikesGroup = new Group();

  restart = createSprite(500,300);
  restart.addImage(restartImage);
  restart.visible= false;
}

function draw() {

if(gameState ==="PLAY"){
  if (keyDown("up")) {
    ironMan.velocityY = -10;
  }
  if (keyDown("left")) {
    ironMan.x = ironMan.x - 5;
  }
  if (keyDown("right")) {
    ironMan.x = ironMan.x + 5;
  }
  ironMan.velocityY = ironMan.velocityY + 0.5;

  if(bg.y > 400){
    bg.y=300;
  }

  generateDiamonds();

  for(var i = 0; i<(diamondsGroup).length; i++){
    var temp = (diamondsGroup).get(i);
    if(temp.isTouching(ironMan)){
      temp.destroy();
      temp = null;
    }
  }

  generateSpikes();

  for(var i = 0; i<(spikesGroup).length; i++){
    var temp = (spikesGroup).get(i);
    if(temp.isTouching(ironMan)){
      temp.destroy();
      temp = null;
    }
  }
}


  
    drawSprites();
}

function generateDiamonds(){
  if(frameCount % 80 === 0){
 diamond = createSprite(1200, 0, 40, 10);
 diamond.addAnimation("diamond", diamondImage);
 diamond.x = random(50,850);
 diamond.scale = 0.4;
 diamond.velocityY = 3;
 diamond.lifetime = 400;
 diamondsGroup.add(diamond);
  }
}
  
function generateSpikes(){
  if(frameCount % 150 === 0){
 spikes = createSprite(1200, 90, 10, 40);
 spikes.addAnimation("spike", spikeImage);
 spikes.x = random(50,850);
 spikes.scale = 0.4;
 spikes.velocityY = 3;
 spikes.lifetime = 400;
 spikesGroup.add(spikes);
  }
}
  

