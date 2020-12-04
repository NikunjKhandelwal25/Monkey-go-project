
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  score=0
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  FoodGroup=new Group();
  
  
  ObstacleGroup=new Group();
}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(80,315,20,30)
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4

  
}


function draw() {
background("lightblue")
  if(keyWentDown("space")&&monkey.y>300){
    monkey.velocityY=-13; 
  }
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground);
   ground.x =ground.width/2   
  
  fruits();
  obstacles();
  
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time:"+ survivalTime,100,50);
  drawSprites();
  
}


function fruits(){
  if(frameCount%80===0){
   banana=createSprite(400,random(120,200),20,20)
    banana.addImage(bananaImage)
    banana.scale=0.1;
  banana.velocityX=-7;
    banana.lifetime=80;
    FoodGroup.add(banana)
  }
}
function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(400,330,20,20)
    obstacle.addImage(obstaceImage)
    obstacle.scale=0.1;
    obstacle.velocityX=-8;
    obstacle.lifetime=80;
    ObstacleGroup.add(obstacle);
  }
}


