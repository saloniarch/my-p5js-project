let size = 55;
let rows;
let cols;

let boxes = [];

let font;
let msg = "H";
let points = [];
let fontX = -3.7;
let fontY = 3.9;

async function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
  font = await loadFont("fonts/IBMPlexMono-Bold.ttf");

  cols = width / size;
  rows = height / size;

  points = font.textToPoints(msg, fontX, fontY, {
    sampleFactor: 5, // Adjust for more or fewer points
  });

  // Runs once, creates boxes
  for (let i = 0; i < cols; i++) {
    boxes[i] = [];
    for (let j = 0; j < rows; j++) {
      boxes[i][j] = new Box(
        i * size - width / 2 + size / 2,
        j * size - height / 2 + size / 2,
      );
    }
  }
}

function draw() {
  background(0, 0, 113);
  let distance;

  //Runs every frame, displays boxes
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      for (let k = 0; k < points.length; k++) {
        distance = dist(
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
}
