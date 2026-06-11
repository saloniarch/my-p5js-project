const rotatingBlocksSketch = (p) => {
  let distMouse = 50;
  let cols, rows;
  let size = 10;
  let offset = 4;
  let blocks = [];
  let Block;

  p.setup = () => {
    p.createCanvas(600, 600).parent("rotating-blocks");
    p.rectMode(p.CENTER);
    p.angleMode(p.DEGREES);

    // Create Block class with p5 instance
    Block = createBlockClass(p);

    cols = p.width / size;
    rows = p.height / size;

    for (let i = 0; i < cols; i++) {
      blocks[i] = [];
      for (let j = 0; j < rows; j++) {
        blocks[i][j] = new Block(
          size / 2 + i * size,
          size / 2 + j * size,
          size,
          offset,
        );
      }
    }
  };

  p.draw = () => {
    p.background(0);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        blocks[i][j].move(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY, distMouse);
        blocks[i][j].display();
      }
    }
  };
};

new p5(rotatingBlocksSketch);
