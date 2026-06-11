// Outer circle parameters
let angle = 0;
let r = 150;
let numAxis = 4;
let shiftingAngle = [];

// Position tracking for outer circle
let x;
let y;
let x2 = [];
let y2 = [];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  // Pre-calculate shifting angles for each axis
  for (let i = 0; i < numAxis; i++) {
    shiftingAngle[i] = (i * 90) / numAxis;
  }
}

function draw() {
  background(79, 148, 167);
  stroke(0);

  // Calculate outer circle position
  x = r * cos(angle);
  y = r * sin(angle);

  translate(width / 2, height / 2);

  // Draw reference circle
  noFill();
  stroke(255);
  ellipse(0, 0, r * 2, r * 2);

  // Draw outer circle (red)
  fill(70);
  ellipse(x, y, 20, 20);

  // Draw axes and circles for each rotation offset
  for (let i = 0; i < numAxis; i++) {
    // Calculate position on circle for this axis
    x2[i] = r * cos(angle + shiftingAngle[i]);
    y2[i] = r * sin(angle + shiftingAngle[i]);

    push();
    rotate(-shiftingAngle[i]);

    // Draw axis lines
    stroke(255);
    line(-r, 0, r, 0);
    line(0, -r, 0, r);

    // Draw circles at axis intersections
    fill(255);
    ellipse(x2[i], 0, 20, 20);
    ellipse(0, y2[i], 20, 20);

    pop();
  }

  angle += 1;
}
