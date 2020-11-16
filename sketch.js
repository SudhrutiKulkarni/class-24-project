var paperball;
var  ground;
var brick1,brick2,brick3
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

paperball=new Paper(200,200,10);

brick1=createSprite(400,655,200,20,width/2);
	brick1.shapeColor=("yellow");
	brick1.scale=0.5;
	
	brick2=createSprite(345,635,20,100,width/2);
	brick2.shapeColor=("yellow");
	brick2.scale=0.5;

	brick3=createSprite(455,635,20,100,width/2);
	brick3.shapeColor=("yellow");
	brick3.scale=0.5;

	
	groundSprite=createSprite(width/2, height-35, width,10);
  groundSprite.shapeColor=color(255)
  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  paperball.display();
  ground.display();
  drawSprites();
 
}

function keyPressed (){
  if(keyCode===UP_ARROW){
  Matter.body.applyForse(paperObject.body,paperPbject.body.position,{x:85,y:-85});
  }
}