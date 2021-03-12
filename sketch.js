
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, stoneObj, groundObject, launcherObject;
var mango1;
var world, boy;

function preload() {
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1250, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1080, 100, 30);
	mango2 = new mango(1000, 150, 30);
	mango3 = new mango(1175, 200, 30);
	mango4 = new mango(900, 225, 30);
	mango5 = new mango(950, 80, 30);

	stone = new Stone(240, 360);
	stoneShot = new LaunchStone(stone.body, { x: 240, y: 420 });
	treeObj = new tree(1000, 580);
	groundObject = new ground(width / 2, 600, width, 20);

	Engine.run(engine);

}

function draw() {

	background(230);
	//Add code for displaying text here!
	image(boy, 200, 340, 200, 300);


	treeObj.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	stone.display();
	stoneShot.display();

	groundObject.display();
	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
}
function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
	stoneShot.fly();
}
function detectCollision(stoneObj, mangoObj) {
	var mangoObjPos = mangoObj.body.position;
	var stoneObjPos = stoneObj.body.position;
	var distance = dist(mangoObjPos.x, mangoObjPos.y, stoneObjPos.x, stoneObjPos.y);

	if (distance <= 2 * (stoneObj.body.circleRadius + mangoObj.body.circleRadius)) {
		Matter.Body.setStatic(mangoObj.body, false);
	}
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:240, y:360});
		stoneShot.attach(stone.body);
	}
}