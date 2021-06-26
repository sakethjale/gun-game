const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bullet;
var gun;
var bg;

function preload(){
   bg=loadImage("background image1.jpg")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    

    bullet=new Bullet(200,100,50,50);
    gun=new Gun(100,100,100,100);
}

function draw(){
    background(0);
    Engine.update(engine);

    bullet.display();
    gun.display();
  
       
}











function mouseDragged(){
  
}
function mouseReleased(){
   
}
function keyPressed(){
  
}

