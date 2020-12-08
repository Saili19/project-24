  class Paper {
    constructor(x,y ){
        var ball_options ={
            isStatic:false,
            restitution: 0.3,
            friction: 0.5,
            density: 2,
             
        }
       this.body=Bodies.circle(x,y,20,ball_options);
       World.add(world,this.body);


    }
    display(){
        var pos= this.body.position ;
       
        push()
        translate(pos.x,pos.y);
        fill(244,0,69);
        strokeWeight(2);
        stroke("black");
        ellipseMode(RADIUS);
        ellipse (0,0, 20);
       pop()
    }


}