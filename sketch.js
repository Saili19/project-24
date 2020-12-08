var box1,box2,box3;
var ball ;
 var floor;
var world,engine;
 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	 

	engine = Engine.create();
	world = engine.world;

	box1 = new Box (450,560,20,200);
	box2 = new Box (660,560,20,200);
	box3 = new Box (560,660,200,20);
	 

    floor = new Floor(400,680,810,10);
 
   ball = new Paper(60,600);
    
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  keyPressed();
 
 ball.display();
 floor.display();
 box1.display();
 box2.display();
 box3.display();
 
  
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode ===UP_ARROW){

		Matter.Body.applyForce(ball.body, ball.body.position,{x:8,y: -8 });


	}
}


