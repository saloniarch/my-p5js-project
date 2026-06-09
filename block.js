class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.c = 70;
  }

  display() {
    noFill();
    stroke(this.c);
    strokeWeight(2);
    push();

    translate(this.x, this.y); //translate to the center of the canvas
    rotate(this.angle);

    if (this.angle > 0 && this.angle < 45) {
      this.drawRect();
    } else {
      this.drawX();
    }

    pop();
  }

  move() {
    //If the mouse is moving, check distance between mouse loc and center of square
    let distance;

    if (pmouseX - mouseX != 0 || pmouseY - mouseY != 0) {
      distance = dist(mouseX, mouseY, this.x, this.y);
      if (distance < distMouse) {
        this.angle += 1;
        this.c = color(120, 0, 100);
      }
    }
    // if squares are already rotating, keep rotating until angle = 90
    if (this.angle > 0 && this.angle < 90) {
      this.angle += 1;
      if (this.c) this.c = color(240, 0, 216);
    } else {
      this.angle = 0;
      this.c = color(120, 0, 100);
    }
  }

  drawRect() {
    rect(0, 0, size - offset, size - offset);
  }

  drawX() {
    let margin = -size / 2; // starting point at half the size of the square
    let halfOffset = offset / 2; // half of the offset to adjust the line position

    // Diagonal from top-left to bottom-right
    line(
      margin + halfOffset, // x1 (start x, top-left)
      margin + halfOffset, // y1 (start y, top-left)
      margin + size - halfOffset, // x2 (end x, bottom-right)
      margin + size - halfOffset, // y2 (end y, bottom-right)
    );

    // Diagonal from top-right to bottom-left
    line(
      margin + size - halfOffset, // x1 (start x, top-right)
      margin + halfOffset, // y1 (start y, top-right)
      margin + halfOffset, // x2 (end x, bottom-left)
      margin + size - halfOffset, // y2 (end y, bottom-left)
    );
  }
}
