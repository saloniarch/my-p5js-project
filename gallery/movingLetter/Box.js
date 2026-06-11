// Box class factory - returns a class that uses the p5 instance
const createBoxClass = (p) => {
  return class Box {
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.isLetter = false;
      this.angle = 0;
      this.depth = 0;
    }

    display() {
      if (this.isLetter) {
        p.fill(0, 0, 255);
        this.angle += 1;
        this.depth += 2 * p.sin(this.angle);
      } else {
        p.noFill();
        p.stroke(125, 249, 255);
        this.angle -= 1;
      }

      p.push();
      p.translate(this.x, this.y, this.depth);
      p.rotateX(this.angle);
      p.rotateY(this.angle);
      p.box(this.size - (1 / 3) * this.size);
      p.pop();
    }
  };
};
