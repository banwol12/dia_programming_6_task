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
  mover.savePower();
  mover.turbulence();
}

function mouseReleased() {
  if (mover.savedPower > 0) {
    let power = mover.savedPower;
    let wind = createVector(power, 0);
    mover.applyForce(wind);
    mover.savedPower = 0;
  }
}
