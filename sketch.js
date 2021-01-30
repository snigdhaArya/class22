const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var engine,object,world,obectP,ball,ballP,ground,groundP;

function setup() {
  createCanvas(400,400);
  
  engine=Engine.create();
  world=engine.world;
  obectP={isStatic:true}
  ballP={restitution:1.0}
  object = Bodies.rectangle(200,100,50,50,obectP);
  
   World.add(world,object);
   console.log(object);

   ground = Bodies.rectangle(200,390,200,20,obectP);
   World.add(world,ground);

   ball=Bodies.circle(150,100,30,ballP);
   World.add(world,ball);
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(200,200,50,50);
  rect(object.position.x,object.position.y,100,100);
  rect(ground.position.x,ground.position.y,400,20);
  circle(ball.position.x,ball.position.y,30); 

}