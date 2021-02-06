class TrafficLight{

    constructor(x,y,radius){
        this.x=x;
        this.y=y;
        this.radius=radius;
        //this.height=height;
    }

    display(){
        push();
       fill("brown");
        strokeWeight(4);
        stroke("black");
        rect(this.x-23,this.y-23,this.radius+5,3*this.radius+15);

        strokeWeight(12);
        line(this.x,this.y+50,this.x,this.y+180);
        
        ellipseMode(CENTER);
        strokeWeight(5);
        fill(255);
        
        stroke("red");
        ellipse(this.x,this.y,this.radius);
        
        stroke("orange");
        ellipse(this.x,this.y+45,this.radius);
        
        stroke("green");
        ellipse(this.x,this.y+90,this.radius);
        pop();
    }
}