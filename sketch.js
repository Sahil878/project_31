const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World= Matter.World;

var engine, world
var drop = []

/*function preload(){
    
}*/

function setup(){
   createCanvas(1200,600)
   engine = Engine.create();
   world = engine.world;

   drop = new Drop(random (0,400),random (0,400),20)

   var maxDrops = 100

   for(var i=0; i<maxDrops; i++){
    drop.push(new Drop(random(0,400),random(0,400),20))
 }
  
}

function draw(){
background(0)

    drop.display()
}   

