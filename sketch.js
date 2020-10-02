const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

function preload()
{
	boyImg=loadImage("Plucking_mangoes/boy.png");
}

function setup() {
	createCanvas(1200, 580);
	engine = Engine.create();
	world = engine.world;

	tree = new Tree(950 , 300 , 500 , 600)
	
	ground = new Ground(width/2 , height , width , 10)

	stone = new Stone(500, 500, 100, 100)

	tree = new Tree(950 , 300 , 500 , 600)
	
	boy=createSprite(100,520,10,10);
	boy.addImage(boyImg);
	boy.scale=0.1;

	mango1 = new Mangoes(1100 , 170 , 10, 10)
	mango2 = new Mangoes(900 , 200 , 10, 10)
	mango3 = new Mangoes(1000 , 100 , 10, 10)
	mango4 = new Mangoes(850 , 250 , 10, 10)
	mango5 = new Mangoes(900 , 80 , 10, 10)
	mango6 = new Mangoes(1000 , 200 , 10, 10)
	mango7 = new Mangoes(800 , 200 , 10, 10)
	mango8 = new Mangoes(1130 , 230 , 10, 10)
	mango9 = new Mangoes(1020 , 40 , 10, 10)

	slingshot = new SlingShot(stone.body,{x:100, y:400});
	
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(255);

	textSize(25);
  	text("Press Space to get a second Chance to Play!!",50 ,50);
	
	drawSprites();
	
	tree.display();
	ground.display();
	stone.display();
	
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();

	slingshot.display();

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);
	detectCollision(stone,mango8);
	detectCollision(stone,mango9);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:235, y:420}) 
        slingshot.attach(stone.body);

    }
}

function detectCollision(lstone , lmango){
	
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance = dist(stoneBodyPosition.x , stoneBodyPosition.y , mangoBodyPosition.x , stoneBodyPosition.y )

	if (distance<-lmango.r+lstone.r){
		Body.setStatic(lmango.body , false);
	}
}