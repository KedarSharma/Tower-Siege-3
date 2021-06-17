class Polygon {
    constructor(x,y,width,height){
        var options = {
            'density': 500,
            'friction':0.4
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
    }
    
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        pop();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}