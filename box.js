class Box {
  constructor(x,y){
    var options={
      isStatic: false
    }
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.Visiblity = 255;
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    if (this.body.speed<3){
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,50,50);
    pop();
  }
  else{
    World.remove(world, this.body);
    push();
    this.Visiblity = this.Visiblity-5;
   // tint(255, this.Visiblity);
    rect(pos.x, pos.y, 50,50)
    pop();

  }
  }
 score(){
   if(this.Visiblity<0 && this.Visiblity>=105){
      score++;
   }
  } 
}