class Cannon {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    /**preload images  */
    this.cannonImg = loadImage("../assets/canon.png");
    this.cannonBase = loadImage("../assets/cannonBase");
  }
  show() {
    push();
    imageMode(CENTER);
    image(cannonImg, this.x, this.y, this.width, this.height);
    pop();
    image(cannonBase, 70, 20, 200, 200);
    noFill();
  }
}
