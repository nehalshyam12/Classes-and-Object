const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var line1, line2, line3,paper1;
var ground;


function setup() {
  
var canvas = createCanvas(1200,400);

engine = Engine.create();
world = engine.world;

line1 = new Dustbin(780,320,10,180);
line2 = new Dustbin(930,320,10,180);
line3 = new Dustbin(855,375,160,10);

paper1 = new Paper(100,50,18);

ground = new Ground(600,390-50,1200,20);

}

function draw() {
  
  
  background(0);

Engine.update(engine);



line1.display();
line2.display();
line3.display();

paper1.display();
  
ground.display();

keyPressed();

  }

function keyPressed(){

if(keyCode === UP_ARROW){

  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0.05,y:-1.180});
  //Matter.Body.applyForce(paper1.body,{X:0,Y:0},{x:85, y:-85});
  
}
}
