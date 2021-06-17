class Ground {
    constructor(x,y,width,height){
        var options = {
            'isStatic': true,
            'density': 500,
            'friction':0.4
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        pop();
        rectMode(CENTER);
        fill("red");
        stroke("red");
        strokeWeight(0);
        rect(pos.x,pos.y,this.width,this.height);
    }
}