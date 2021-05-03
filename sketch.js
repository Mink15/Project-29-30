const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const constraint = Matter.Constraint;

var world; //engine;
var ground1,ground2,polygon1;
//var G1box1,G1box2,G1box3,G1box4,G1box5,G1box6,G1box7,G1box8,G1box9,G1box10,G1box11,G1box12,G1box13,G1box14,G1box15,G1box16;
//var G2G1box1,G2G1box2,G2G1box3,G2G1box4,G2G1box5,G2G1box6,G2G1box7,G2G1box8,G2G1box9,
//var constrainedLog;
var launcherObj, launchingForce=100; 

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;

	polygon1=new polygon(250,350,30);

	ground1=new ground(700,550,400,15);
	//Ground1 - box on First Level
	G1box1=new box(550,507,50,70);
	G1box2=new box(600,507,50,70);
	G1box3=new box(650,507,50,70);
	G1box4=new box(700,507,50,70);
	G1box5=new box(750,507,50,70);
	G1box6=new box(800,507,50,70);
	G1box7=new box(850,507,50,70);
	//Ground1 - box on First Level
	G1box8=new box(600,437,50,70);
	G1box9=new box(650,437,50,70);
	G1box10=new box(700,437,50,70);
	G1box11=new box(750,437,50,70);
	G1box12=new box(800,437,50,70);
	//Ground1 - box on Second Level
	G1box13=new box(650,367,50,70);
	G1box14=new box(700,367,50,70);
	G1box15=new box(750,367,50,70);
	//Ground1 - box on Top Level
	G1box16=new box(700,297,50,70);

	ground2=new ground(1150,303,300,15);
	//Ground2 - box on Bottom Level
	G2box1=new box(1050,260,50,70);
	G2box2=new box(1100,260,50,70);
	G2box3=new box(1150,260,50,70);
	G2box4=new box(1200,260,50,70);
	G2box5=new box(1250,260,50,70);
	//Ground2 - box on First Level
	G2box6=new box(1100,190,50,70);
	G2box7=new box(1150,190,50,70);
	G2box8=new box(1200,190,50,70);
	//Ground2 - box on Top Level
	G2box9=new box(1150,120,50,70);

	launcherObj=new slingshot(polygon1.body,{x:250,y:350})
	//polygon1 = Bodies.circle(50,200,20);
	//World.add(world,polygon1);

	var render = Render.create({
    	element: document.body,
    	engine: engine,
    	options: {
      		width: 1500,
      		height: 600,
      		wireframes: false
    	}
  	});

	Engine.run(engine);  
}


function draw() {
  	//rectMode(CENTER);
	background("skyblue");
	Engine.update(engine);
	strokeWeight(2);

	textSize(25);
	text("Press SPACEBAR to get extra chance to play!!",50 ,50);

	polygon1.display();
	
	// ground 1
	ground1.display();
	G1box1.display();
	G1box2.display();
	G1box3.display();
	G1box4.display();
	G1box5.display();
	G1box6.display();
	G1box7.display();
	G1box8.display();
	G1box9.display();
	G1box10.display();
	G1box11.display();
	G1box12.display();
	G1box13.display();
	G1box14.display();
	G1box15.display();
	G1box16.display();

	//ground 2
	ground2.display();
	G2box1.display();
	G2box2.display();
	G2box3.display();
	G2box4.display();
	G2box5.display();
	G2box6.display();
	G2box7.display();
	G2box8.display();
	G2box9.display();
	
	detectcollision(polygon1,G1box1);
	detectcollision(polygon1,G1box2);
	detectcollision(polygon1,G1box3);
	detectcollision(polygon1,G1box4);
	detectcollision(polygon1,G1box5);
	detectcollision(polygon1,G1box6);
	detectcollision(polygon1,G1box7);
	detectcollision(polygon1,G1box8);
	detectcollision(polygon1,G1box9);
	detectcollision(polygon1,G1box10);
	detectcollision(polygon1,G1box11);
	detectcollision(polygon1,G1box12);
	detectcollision(polygon1,G1box13);
	detectcollision(polygon1,G1box14);
	detectcollision(polygon1,G1box15);
	detectcollision(polygon1,G1box16);

	detectcollision(polygon1,G2box1);
	detectcollision(polygon1,G2box2);
	detectcollision(polygon1,G2box3);
	detectcollision(polygon1,G2box4);
	detectcollision(polygon1,G2box5);
	detectcollision(polygon1,G2box6);
	detectcollision(polygon1,G2box7);
	detectcollision(polygon1,G2box8);
	detectcollision(polygon1,G2box9);

	launcherObj.display();
}

function mouseDragged()
{
    Matter.Body.setPosition(polygon1.body, {x:mouseX,y:mouseY})
}

function mouseReleased()
{
    launcherObj.fly();
}	

function detectcollision(Lpolygon,Lbox){
	boxBodyPosition=Lbox.body.position;
	polygonBodyPosition=Lpolygon.body.position;

	var distance=dist(polygonBodyPosition.x, polygonBodyPosition.y, boxBodyPosition.x, boxBodyPosition.y);

	if(distance<=Lbox.w+Lpolygon.r)
	{
		Matter.Body.setStatic(Lbox.body,false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(polygon1.body, {x:250, y:350})
		launcherObj.attach(polygon1.body);		
	}
}