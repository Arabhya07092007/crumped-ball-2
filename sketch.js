
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var paper_ball ;
var bar;
var ground;
var rand  = 1;
var v1 =  220;
var v2 = 0;
var v3 = 300;

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
  world = engine.world;


  paper_ball = new Ball(100,350,40);
  ground = new Rect(650,680,1300,30,);
  bar = new Log(1000,660,200,20);


  var render = Render.create({

    element:document.body,
    engine:engine,
    options:{
      width:1200,
      height:700,
      wireframe:false

    }
  });


  if (v2 = 2000){

    v2 = 0;
  }

  keyPressed();

  Render.run(render);
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(v1,v3,v2)

  rand = rand+1;

  v1= v1-2;
  v2= v2+5;
  v3 = v3-2;

  ground.display();
  paper_ball.display();
  bar.display();
  console.log("rand"+rand);
  console.log("v1"+v1);
  console.log("v2"+v2);


}

function keyPressed() {
  if (keyCode == UP_ARROW) {

   Matter.Body.applyForce(paper_ball.body,paper_ball.body.position,{x:320,y:-205});
     
   }
 }