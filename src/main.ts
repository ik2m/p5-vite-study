import "./style.css";
import p5 from "p5";

class Rect {
  p: p5;
  x: number;
  y: number;
  size: number;
  angle: number;

  constructor(p: p5, x: number, y: number, size: number, angle: number) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.size = size;
    this.angle = angle;
  }

  draw() {
    this.p.translate(this.x, this.y);
    this.p.rotate(this.angle);
    this.p.noStroke();
    this.p.fill(this.p.color(255));
    this.p.rect(0, 0, this.size, this.size, 10);
  }

  updateRotation(angle: number) {
    this.angle = angle;
  }

  updatePosition(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const sketch = (p: p5) => {
  const rect: Rect = new Rect(p, p.width / 2, p.height / 2, 100, 45);

  p.setup = () => {
    const canvas = p.createCanvas(400, 400);
    canvas.parent("app");

    p.rectMode(p.CENTER);

    rect.updatePosition(p.width / 2, p.height / 2);
  };

  p.draw = () => {
    p.background(220);

    rect.updateRotation(rect.angle + 0.01);
    rect.draw();
  };
};

new p5(sketch);
