class Slingshot{
    constructor(object1,pointB){
        var options={
            bodyA:object1,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB=pointB
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        if(this.sling.bodyA){
            strokeWeight(4);
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y) 
        }
    }
    fly(){
        this.sling.bodyA=null;
    }
}
