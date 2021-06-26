class Bullet{
    constructor(x,y,width,height){
        var bb={
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,bb);
        this.width=width;
        this.height=height;
        this.image=loadImage("bullet.png");
        World.add(world,this.body);
               
    }
    display(){
        var pos=this.body.position;
        push ();
        translate (pos.x,pos.y)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop ();

    }
}