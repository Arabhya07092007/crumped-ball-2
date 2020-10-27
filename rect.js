class Log {

    constructor(x,y){
    
    var options  = {
    
          isStatic:true
    
    }
    
    this.x=x;
    this.y=y;
    this.w = 200;
    this.h = 100;
    this.thickness = 20;
    this.angle = 0;
    //this.image = loadImage("dustbingreenn.png")
    

    this.bottomBody = Bodies.rectangle(this.x,this.y,this.w,this.thickness,options);
    this.leftBody= Bodies.rectangle(this.x-this.w/2,this.y-this.h/2,this.thickness,this.h,options);
    this.rightBody = Bodies.rectangle(this.x+this.w/2,this.y-this.h/2,this.thickness,this.h,options);
    this.image =  loadImage("dustbingreen.png");

    Matter.Body.setAngle(this.leftBody,this.angle);
    Matter.Body.setAngle(this.leftBody,-1*this.angle);

    World.add(world,this.bottomBody);
    World.add(world,this.leftBody);
    World.add(world,this.rightBody);
    
    }
         
    display(){
    
    var posBottom  = this.bottomBody.position;
    var posLeft  =  this.leftBody.position;
    var posright  =  this.rightBody.position;

    push();
    translate(posBottom.x,posBottom.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    fill("green");
    rotate(this.angle);
    rect(0,0,this.w, this.thickness);
    pop();


    push();
    translate(posLeft.x,posLeft.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    fill("green");
    rotate(this.angle);
    rect(0,0,this.thickness, this.h);
    pop();

    push();
    translate(posright.x,posright.y);
    angleMode(RADIANS);
    fill("green");
    imageMode(CENTER);
    image(this.image,-85,-20);
    pop();
    

    }
    }