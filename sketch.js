
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(500,400);
 score = 0
var survivaltime = 0
FoodGroup = new Group();
obstaclesGroup = new Group();
monkey = createSprite(150,300,20,20);
monkey.addAnimation("monkey",monkey_running);
monkey.scale = 0.1;

ground = createSprite(500,400,1000,10);
ground.shapeColor=("lightpink");
ground.velocityX=-4
}


function draw() {
background("cyan");
if(ground.x<0){
ground.x=ground.width/2;
}
spawFood();
spawObstacle();
if(keyDown("space")){
monkey.velocityY=-15;
}
monkey.velocityY=monkey.velocityY+0.8
monkey.collide(ground);
if(obstaclesGroup.isTouching(monkey)){
monkey.velocityX = 0;
ground.velocityX = 0;
obstaclesGroup.setVelocityXEach(0);
FoodGroup.setVelocityXEach(0);
}
drawSprites();
  
//obstacle = createSprite(300,360,20,20);
//obstacle.addImage(obstacleImage);
//obstacle.scale = 0.2;
  
//banana = createSprite(300,250,20,20);
//banana.addImage(bananaImage);
//banana.scale = 0.1;
score = frameCount;
textSize(20);
text("survival time ="+score,100,50);
  
}
function spawFood(){
  
if(World.frameCount%100==0){
banana = createSprite(600,250,20,20);
banana.addImage(bananaImage);
banana.scale = 0.1;  
banana.velocityX = -5;
monkey.depth = banana.depth+1;
FoodGroup.add(banana);
}
}

function spawObstacle(){
  
if(World.frameCount%100==0){
obstacle = createSprite(600,360,20,20);
obstacle.addImage(obstacleImage);
obstacle.scale = 0.2;
obstacle.velocityX = -8;

obstaclesGroup.add(obstacle);
}
}



