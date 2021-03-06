class Hero{
    constructor(x, y,r) {
      var options = {
          'frictionAir': 0.005,
          'density':1.0
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(this.x, this.y, this.r/2, options)
      this.image=loadImage("sprites/superhero.png")
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image,0,0,this.r, this.r);
      pop();
    }
  };
  