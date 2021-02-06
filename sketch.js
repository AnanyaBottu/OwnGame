var rect1;

function preload(){
   bgImage=loadImage("road.jpg");
  
}




function setup() {
  createCanvas(displayWidth-10,displayHeight-120);
  //createSprite(400, 200, 50, 50);
  rect1=new TrafficLight(1000,30,40);
  Amb=new Ambulance(200,260,20,20);

  car=new Cars(600,550,20,20);
  
}

function draw() {
  //background("white"); 
   background(bgImage);
  
  rect1.display();
  Amb.display();
  car.display();
  drawSprites();
}