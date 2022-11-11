const d = document,
  w = window;

export default function liquidFooter() {
  const currentTheme = localStorage.getItem("theme");

  // canvas
  const canvas = d.getElementById("canvas"),
    ctx = canvas.getContext("2d");
  canvas.width = w.innerWidth;
  canvas.height = w.innerHeight;

  // canvasbg
  const canvasbg = d.getElementById("canvasbg"),
    ctxbg = canvasbg.getContext("2d");
  canvasbg.width = w.innerWidth;
  canvasbg.height = w.innerHeight;

  let bgBubbles = [];

  function addBgBubble() {
    if (currentTheme === "dark")
      bgBubbles.push(new Bubble("rgb(230,230,230", 6));
    else if (currentTheme === "middle")
      bgBubbles.push(new Bubble("rgb(230,230,230", 6));
    else bgBubbles.push(new Bubble("rgb(17,17,17", 6));
  }

  class Bubble {
    constructor(color, ySpeed) {
      this.radius = Math.random() * 150 + 30;
      this.life = true;
      this.x = Math.random() * w.innerWidth;
      this.y = Math.random() * 20 + w.innerHeight + this.radius;
      this.vy = Math.random() * 0.00002 + 0.0001 + ySpeed;
      this.vr = 0;
      this.vx = Math.random() * 4 - 2;
      this.color = color;
    }

    update() {
      this.vy += 0.000001;
      this.vr += 0.02;
      this.y -= this.vy;
      this.x -= this.vx;
      if (this.radius > 1) this.radius -= this.vr;

      if (this.radius <= 1) this.life = false;
    }
    draw(currentCanvas) {
      currentCanvas.beginPath();
      currentCanvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      currentCanvas.fillStyle = this.color;
      currentCanvas.fill();
    }
  }
  function handleBubbles() {
    for (let i = bgBubbles.length - 1; i >= 0; i--) {
      bgBubbles[i].update();
      if (!bgBubbles[i].life) bgBubbles.splice(i, 1);
    }

    if (bgBubbles.length < w.innerWidth / 12) addBgBubble();
  }

  function animate() {
    ctxbg.clearRect(0, 0, canvas.width, canvas.height);

    handleBubbles();

    for (let i = bgBubbles.length - 1; i >= 0; i--) {
      bgBubbles[i].draw(ctxbg);
    }

    requestAnimationFrame(animate);
  }

  w.addEventListener("load", animate);
  w.addEventListener("resize", function () {
    canvasbg.width = w.innerWidth;
    canvasbg.height = w.innerHeight;
    let bgBubbles = [];
  });
}
