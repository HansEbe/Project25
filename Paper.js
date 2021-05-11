class Paper {
  constructor(x, y) {
    var options = {
      'density': 0.2,
      'friction': 0.5,
      'restitution': 0.3
    };
    this.body = Bodies.rectangle(x, y, 25, 25, options);
    this.width = 30;
    this.height = 30;
	this.image = loadImage("paper.png");
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    //rectMode(CENTER)
    //rect(0, 0, this.width, this.height);
    imageMode(CENTER);
	image(this.image, 0,-this.height,this.width, this.height);
    pop();
  };
};
