class RAIN{

    constructor(x,y,r){

        var options={
            restituition:0.1
        } 

        this.body=Bodies.circle(x,y,r,options);
        this.radius=r;

        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        
        push ();
        translate (pos.x,pos.y);
        rotate(angle);
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        if(this.body.position.y>730){
            Matter.Body.setPosition(this.body,{x:random (0,width),y:0});
        }
        pop ();
        
    }
}