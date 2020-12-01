const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;
function setup(){
  createCanvas(400,400);

  //create the physics engine
  engine = Engine.create();

  //create the physical world
  world= engine.world;

  var options={
    isStatic:true
  }
  var balloptions={
    restitution:1.0
  }

  //create the bodies
 ground=Bodies.rectangle(200,380,400,50,options);
  //add ground to the physical world
  World.add(world,ground);

  ball=Bodies.circle(200,100,30,balloptions);
  World.add(world,ball);

  console.log (ground.position.x);
  console.log (ground.position.y);
}

function draw(){
  background("black");

  Engine.update(engine);
  rectMode(CENTER);
  rect (ground.position.x ,ground.position.y,400,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
}