let wavyGraphics;

function setup() {
  createCanvas(600, 400);
  wavyGraphics = createGraphics(100, 100, WEBGL);
}

function draw() {
  background(153, 0, 76);

  //sand on bottom half
  stroke(216, 182, 12);
  fill(216, 182, 12);
  quad(0, 350, 600, 240, 600, 400, 0, 400);

  spinningSun();
  wavyRectangle();
}

function spinningSun() {
  push();
  translate(80, 100);

  rotate(frameCount * 0.01);

  //sun
  fill("rgb(254,255,0)"); //yellow
  stroke("orange");
  strokeWeight(4);
  ellipse(0, 0, 67, 80);

  pop();
}

function wavyRectangle() {
  wavyGraphics.background(0, 0, 0, 0); // Clear the graphics with a transparent background
  wavyGraphics.push();

  wavyGraphics.rotateY(frameCount * 0.07);
  wavyGraphics.stroke(240, 0, 216);
  wavyGraphics.fill(0, 0, 0, 0);
  wavyGraphics.strokeWeight(4);

  wavyGraphics.quad(-30, -30, 0, 30, -30, 0, 30, 30, 20, -30, 30, -20);

  wavyGraphics.pop();
  image(wavyGraphics, 250, 150);
}
