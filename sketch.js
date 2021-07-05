const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body= Matter.Body;
var engine,world;

var snow=[];

var backgroundImg;



function preload()  {
  backgroundImg = loadImage("snow3.jpg");
  }
  


function setup() {
  engine=Engine.create();
  world=engine.world;

  var canvas = createCanvas(displayWidth,displayHeight);
 
  ground = new Ground(displayWidth/2,displayHeight,displayWidth,20);
  

  
  

}
function draw(){
   
  imageMode(CENTER)
  image(backgroundImg,displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  Engine.update(engine);

  if(frameCount%10===0){
      snow.push(new Snow(random(100, displayWidth), 10));
    
    }
  
   for (var j = 0; j < snow.length; j++) {
    
      snow[j].display();
    }
 
  ground.display();


}





