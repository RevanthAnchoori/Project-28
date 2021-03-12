class Stone{
    constructor(x,y){
        var options = {
            restitution:1,
            friction:1,
            density:1.5

        }
        this.image = loadImage("images/stone.png");
        this.body = Bodies.circle(x,y,10,options);
        this.x = x;
        this.y = y;
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, 40, 40)
    }
} 