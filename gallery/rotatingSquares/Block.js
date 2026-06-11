// Block class factory
const createBlockClass = (p) => {
  return class Block {
    constructor(x, y, size, offset) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.offset = offset;
      this.angle = 0;
      this.c = 70;
    }

    display() {
      p.noFill();
      p.stroke(this.c);
      p.strokeWeight(2);
      p.push();
      p.translate(this.x, this.y);
      p.rotate(this.angle);

      if (this.angle > 0 && this.angle < 45) {
        this.drawRect();
      } else {
        this.drawX();
      }

      p.pop();
    }

    move(mouseX, mouseY, pmouseX, pmouseY, distMouse) {
      let distance;

      if (pmouseX - mouseX != 0 || pmouseY - mouseY != 0) {
        distance = p.dist(mouseX, mouseY, this.x, this.y);
        if (distance < distMouse) {
          this.angle += 1;
          this.c = p.color(120, 0, 100);
        }
      }

      if (this.angle > 0 && this.angle < 90) {
        this.angle += 1;
        this.c = p.color(240, 0, 216);
      } else {
        this.angle = 0;
        this.c = p.color(120, 0, 100);
      }
    }

    drawRect() {
      p.rect(0, 0, this.size - this.offset, this.size - this.offset);
    }

    drawX() {
      p.line(-this.size / 2, -this.size / 2, this.size / 2, this.size / 2);
      p.line(this.size / 2, -this.size / 2, -this.size / 2, this.size / 2);
    }
  };
};
