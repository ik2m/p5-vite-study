import "./style.css";
import p5 from "p5";

const sketch = (p: p5) => {
  const WHITE = p.color(255);
  const createBaseRect = () => {
    p.translate(p.width / 2, p.height / 2);
    p.rotate(45);
    p.noStroke();
    p.fill(WHITE);
    p.rect(0, 0, 100, 100, 10);
  };

  p.setup = () => {
    const canvas = p.createCanvas(400, 400);
    canvas.parent("app");

    p.rectMode(p.CENTER);
  };

  p.draw = () => {
    p.background(220);

    createBaseRect();
  };
};

new p5(sketch);
