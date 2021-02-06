const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  Body= Matter.Body;
  Constraint= Matter.Constraint;

  var engine,world;
  var rain=[];


function preload(){
    
}

function setup(){

    createCanvas(750,750);

    engine = Engine.create();
    world = engine.world;

    ground = new GROUND(width/2,height,width,20);

    walker=new MAN(width/2-100,height-110);

    var r= round(random(50,width-50));
    console.log(r);

    thunderbolt=new THUNDERBOLT(r,60);
   
    
}

function draw(){

    background(0);

    Engine.update(engine);

    ground.display();
    
     if(frameCount%30===0){
        rain.push(new RAIN(random(20,730),5,5));
       
     }

     for (var j = 0; j < rain.length; j++){  
         rain[j].display();
    }

    walker.display();
    thunderbolt.display();
    
       
}   