
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3,mango4,mango5
var world,boy;
var stone1;
var launcher1;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1140,130,30);
	mango3=new mango(1000,230,30);
	mango4=new mango(1230,150,30);
	mango5=new mango(1070,160,30);
	stone1 = new stone(235,420,30)
	launcher1 = new launcher(stone1.body,{x:235, y:420})


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	detectollision(stone1,mango1)
	detectollision(stone1,mango2)
	detectollision(stone1,mango3)
	detectollision(stone1,mango4)
	detectollision(stone1,mango5)


}

function draw() {

  background(230);
  //Add code for displaying text here!
  Engine.update(engine);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone1.display();

  groundObject.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
	launcher1.fly();

}

function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }