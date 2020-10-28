var monkey , monkeyRunning;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score=0;
var ground;
var survivalTime=0;

function preload(){
  monkeyRunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}
function setup() {
  createCanvas(600,400)
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkeyRunning);
  monkey.scale=0.1
  
  ground=createSprite(400,350,1200,20)
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
}
function draw() {
   background("white");
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    if (keyDown("space")){
      monkey.velocityY=-12
    }
    monkey.velocityY=monkey.velocityY+0.8;
    monkey.collide(ground);
    
    
   food(); 
   obstacles();
  
   drawSprites();
   
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime, 100,50);
}
function food(){
  if(frameCount % 80 === 0){
     banana=createSprite(300,200,10,10);
     banana.addImage(bananaImage);
     banana.scale=0.1;
     banana.y = Math.round(random(120,200));
     banana.velocityX = -4;
     banana.lifetime=150;
  }
}
function obstacles(){
 if(frameCount % 300 === 0){
  obstacle=createSprite(600,320,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1; 
  obstacle.lifetime=150;
  obstacle.velocityX = -4;
 }
}