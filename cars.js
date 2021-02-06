class Cars{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image = loadImage("car3.png");
    }
    
    
    display(){
        push();
        rect(this.x,this.y,this.width,this.height);
        pop();
        image(this.image,this.x-10,this.y-25,80,80);

        if(keyCode === UP_ARROW){
            this.y=this.y-1;
        }
    
    
    }
}
    
    
    
    