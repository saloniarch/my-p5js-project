const KineticTypographySketch = (p) => {
  let size = 55;
  let rows;
  let cols;
  let boxes = [];
  let font;
  let msg = "H";
  let points = [];
  let fontX = -3.7;
  let fontY = 3.9;

  p.setup = async () => {
    p.createCanvas(600, 600, p.WEBGL).parent("3d-kinetic-typography");
    p.angleMode(p.DEGREES);

    Box = createBoxClass(p);

    font = await p.loadFont("fonts/IBMPlexMono-Bold.ttf");

    cols = p.width / size;
    rows = p.height / size;

    let fontSize = 350;
    points = font.textToPoints(msg, fontX, fontY, fontSize, {
      sampleFactor: 5, // Adjust for more or fewer points
    });

    // Runs once, creates boxes
    for (let i = 0; i < cols; i++) {
      boxes[i] = [];
      for (let j = 0; j < rows; j++) {
        boxes[i][j] = new Box(
          i * size - p.width / 2 + size / 2,
          j * size - p.height / 2 + size / 2,
          size,
        );
      }
    }
  };

  p.draw = () => {
    p.background(0, 0, 113);

    //Runs every frame, displays boxes
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        for (let k = 0; k < points.length; k++) {
          let distance = p.dist(
            points[k].x * 40,
            points[k].y * 40,
            boxes[i][j].x,
            boxes[i][j].y,
          );
          if (distance < 24) {
            boxes[i][j].isLetter = true;
          }
        }
        boxes[i][j].display();
      }
    }
  };
};
new p5(KineticTypographySketch);
