class Gun{
    constructor(x,y,width,height){
        var gg={
            isStatic:true
     }
        this.body=Bodies.rectangle(x,y,width,height,gg);
        this.width=width;
        this.height=height;
        this.image=loadImage("gun.png");
        World.add(world,this.body);

  }
  display(){
      var pos=this.body.position;
      imageMode(CENTER);
      image (this.image,pos.x,pos.y,this.width,this.height);
  }
}