class Paper{
    constructor(x,y,radius){
    var options = {
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
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.x,this.y,this.radius);
        pop();
    }
}