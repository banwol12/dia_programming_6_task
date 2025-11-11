let mover;

function setup() {
  createCanvas(400, 400);

  mover = new Mover();
}

function draw() {
  background(220);

  let gravity = createVector(0, 0.01 * mover.mass);
  mover.applyForce(gravity);

  mover.update();
  mover.checkEdges();
  mover.show();
}
