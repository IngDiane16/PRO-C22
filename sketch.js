const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, ground;
var backgroundImg, tower, towerImage;
var cannon, angle;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}
function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic: true,
  };
  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);
  /**Adding tower with Matter */
  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);
  //add the cannon with the class
  angle = 20;
  cannon = new Cannon(180, 110, 130, 100, angle);
  /**Adding the cannon ball with the class */
  cannonBall = new CannonBall(cannon.x, cannon.y);
}

function draw() {
  background(189);

  Engine.update(engine);
  /**adding ground */
  rect(ground.position.x, ground.position.y, width * 2, 1);
  image(backgroundImg, 0, 0, 1200, 600);
  /**Adding tower */
  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();
  /**Adding cannon */
  cannon.show();
  /**Adding cannon Ball */
  cannonBall.show();
}
