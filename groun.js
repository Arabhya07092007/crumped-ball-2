class Rect {

    constructor(x,y,width,height){
    
    var options  = {
    
          isStatic:true
    
    }
    
    this.x=x;
    this.y=y;
    this.w = width;
    this.h = height;
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    }
    
    display(){
    
        var pos  = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(rand+1,v1,v3);
        rotate(this.angle);
        rect(0,0,this.w, this.h);
        pop();
    }
}