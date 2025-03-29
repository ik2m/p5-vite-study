import "./style.css";
import p5 from "p5";

class Rect {
  p: p5;
  // x: number;
  // y: number;
  size: number;
  // angle: number;
  xSeed: number;
  ySeed: number;
  rSeed: number;

  constructor(p: p5, size: number) {
    this.p = p;
    // this.x = x;
    // this.y = y;
    this.xSeed = p.random(1000);
    this.ySeed = p.random(1000);
    this.rSeed = p.random(1000);
    this.size = size;
    // this.angle = angle;
  }

  draw() {
    this.p.push();
    const { x, y } = this.calcPosition();
    const { r } = this.calcRotation();
    this.p.translate(x, y);
    this.p.rotate(r);
    this.p.noStroke();
    this.p.fill(this.p.color(255));
    this.p.rect(0, 0, this.size, this.size, this.size / 10);
    this.p.pop();
  }

  updatePosition() {
    this.xSeed += 0.01;
    this.ySeed += 0.01;
  }
  updateRotation() {
    this.rSeed += 0.01;
  }

  calcPosition() {
    return {
      x: this.p.noise(this.xSeed) * this.p.width,
      y: this.p.noise(this.ySeed) * this.p.height,
    };
  }
  calcRotation() {
    return {
      r: this.p.noise(this.rSeed) * this.p.TWO_PI,
    };
  }
}

const sketch = (p: p5) => {
  const rects: Rect[] = [];

  p.setup = () => {
    const canvas = p.createCanvas(400, 400);
    canvas.parent("app");

    p.rectMode(p.CENTER);

    for (let i = 0; i < 10; i++) {
      rects.push(new Rect(p, 100 * p.random(1)));
    }
  };

  p.draw = () => {
    p.background(220);

    rects.forEach((r) => {
      r.updatePosition();
      r.updateRotation();
      r.draw();
    });
  };
};

new p5(sketch);
