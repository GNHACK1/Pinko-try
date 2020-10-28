const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(1510,725);
  
   ground1 = new Ground(730,720,1520,10)



}

function draw() {
  background(0,0,0);  
  engine = Engine.create();
  world = engine.world;

  ground1.display();

  drawSprites();
}