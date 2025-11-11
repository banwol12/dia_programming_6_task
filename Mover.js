class Mover {
    constructor() {
        this.position = createVector(width/2, height/2);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.mass = random(0.5, 5);
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }
    
    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    show() {
        stroke(0);
        fill(175);

        circle(this.position.x, this.position.y, this.mass * 16);
    }

    checkEdges() {
        if (this.position.y + this.mass * 8 > height) {
            this.position.y = height - this.mass * 8;
            this.velocity.y *= -0.99;
        }
    }
}