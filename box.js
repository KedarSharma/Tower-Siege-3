class Box extends BaseClass {
    constructor(x,y,color){
        super(x,y,40,40,0,color,{friction : 1000});
        Matter.Body.setAngle(this.body, 0);
        this.Visibility = 255;
        this.width = 40;
        this.color = color;
        this.height = 40;
    }

    display(){
        var pos = this.body.position;
        if(pos.y < 560){
            super.display();
        }
        else{
            World.remove(world,this.body);
        }
    }
}