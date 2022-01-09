class CannonBall {
  constructor(x, y) {
    var options = {
      isStatic: true,
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    World.add(world, this.body);
  }
  show() {
    var pos = this.body.position;
    push();
    ellipseMode(CENTER);
    ellipse(pos.x, pos.y, this.r, this.r);
    pop();
  }
}
