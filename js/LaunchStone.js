class LaunchStone {
    constructor(stoneBody, handPoint) {
        var options = {
            bodyA: stoneBody,
            pointB: handPoint,
            stiffness: 0.004,
            length: 10

        }
        this.pointB = handPoint;
        this.shot = Constraint.create(options);
        World.add(world, this.shot);
    }
    attach(stoneBody){
        this.shot.bodyA = stoneBody;
    }
    fly() {
        this.shot.bodyA = null;
    }
    display() {
        if (this.shot.bodyA) {
            var pointA = this.shot.bodyA.position;
            line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }
}