class Paper{
    constructor(x,y,radius){
    var options = {

    'isStatic':false,
    'restitution': 0.3,
    'friction': 0.5,
    'density': 1.2
    
    }    
    this.body = Matter.Bodies.circle(x,y,radius,options, 30);
    World.add(world,this.body);
    this.x = x;
    this.y = y;
    this.radius = radius;
    
    }    
    display(){      
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("white");
        strokeWeight(1.5);
        stroke("yellow")
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}