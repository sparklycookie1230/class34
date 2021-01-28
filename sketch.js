const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var ball;
var sling;

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    
    
    ground = new Ground(600, 600, 1200, 20)

    box1 = new Box(730,320,70,70);
    box10 = new Box(730,400,70,70);
    box9 = new Box(730,480,70,70);

    box2 = new Box(890,320,70,70);
   

    box3 = new Box(720,240,70,70);
    box4 = new Box(890,240,70,70);
    


    box5 = new Box(810,160,70,70);
    box6 = new Box(810,200,70,70);
    box7 = new Box(810,280,70,70);
    box8 = new Box(810,360,70,70);


    ball = new Ball(500,200,80,80);

    sling = new SlingShot(ball.body,{x:500 , y:100 });

}

function draw(){
    background("purple");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
   
    box3.display();
    box4.display();
   
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

ball.display();

sling.display();
   }