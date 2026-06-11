const beautifulTrigonometrySketch = (p) => {
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

  p.setup = () => {
    p.createCanvas(600, 600).parent("beautiful-trigonometry");
    p.angleMode(p.DEGREES);

    // Pre-calculate shifting angles for each axis
    for (let i = 0; i < numAxis; i++) {
      shiftingAngle[i] = (i * 90) / numAxis;
    }
  };

  p.draw = () => {
    p.background(79, 148, 167);
    p.stroke(0);

    // Calculate outer circle position
    x = r * p.cos(angle);
    y = r * p.sin(angle);

    p.translate(p.width / 2, p.height / 2);

    // Draw reference circle
    p.noFill();
    p.stroke(255);
    p.ellipse(0, 0, r * 2, r * 2);

    // Draw outer circle (red)
    p.fill(70);
    p.ellipse(x, y, 20, 20);

    // Draw axes and circles for each rotation offset
    for (let i = 0; i < numAxis; i++) {
      // Calculate position on circle for this axis
      x2[i] = r * p.cos(angle + shiftingAngle[i]);
      y2[i] = r * p.sin(angle + shiftingAngle[i]);

      p.push();
      p.rotate(-shiftingAngle[i]);

      // Draw axis lines
      p.stroke(255);
      p.line(-r, 0, r, 0);
      p.line(0, -r, 0, r);

      // Draw circles at axis intersections
      p.fill(255);
      p.ellipse(x2[i], 0, 20, 20);
      p.ellipse(0, y2[i], 20, 20);

      p.pop();
    }

    angle += 1;
  };
};

new p5(beautifulTrigonometrySketch);
