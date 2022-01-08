const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImg;


function preload() {
  backgroundImg=loadImage("./assets/background.gif");
}
function setup() {
  
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  var options={
    isStatic:true,
  }
  ground= Bodies.rectangle(0,height-1,width*2,1,options);
  World.add(world,ground);
  
 
}

function draw() {
  background(189);
 
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,width*2,1);
  image(backgroundImg,0,0,1200,600);
   
}
