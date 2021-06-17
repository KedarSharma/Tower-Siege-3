class Slingshot {
    constructor(point,body){
        var options = {
            pointA : point,
            bodyB : body,
            'stiffness' : 0.3,
            'length' : 10
        }
        this.sling = Constraint.create(options);
        this.pointA = point;
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyB = null;
    }

    attach(body){
        this.sling.bodyB = body;
    }

    display(){
        if(this.sling.bodyB){
            var pointA = this.pointA;
            var bodyB = this.sling.bodyB.position;
            push();
            stroke("white");
            strokeWeight(3);
            line(pointA.x,pointA.y,bodyB.x,bodyB.y);
            pop();
        }
    }
}