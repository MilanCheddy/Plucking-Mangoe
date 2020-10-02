class Stone {

    constructor(x, y, r) { 
        var options = { 
            isStatic:false, 
            restitution:0.3, 
            friction:1, 
            density:1.2 
        }
        
        this.x=x;
        this.y=y;
        this.r=r
        
        this.body=Bodies.circle(this.x, this.y, this.r, options);
        this.image=loadImage("Plucking_mangoes/stone.png");
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*0.5, this.r*0.5);
        //image(this.image, 500, 465, 10, 10);
        pop()
    }

    
}
