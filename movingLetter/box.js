class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.isLetter = false;
    this.angle = 0;
    this.depth = 0;
  }

  display() {
    if (this.isLetter == true) {
      fill(0, 0, 255);
      this.angle += 1;
      this.depth += 2 * sin(this.angle);
    } else {
      noFill();
      stroke(125, 249, 255);
      this.angle -= 1;
    }

    let z = map(mouseX, 0, width, 0, 100);
    push();
    translate(this.x, this.y, this.depth);
    rotateX(this.angle);
    rotateY(this.angle);
    box(size - (1 / 3) * size);
    pop();
  }
}
