const d = document,
  w = window;

const canvas = d.getElementById("canvas1"),
  ctx = canvas.getContext("2d");
canvas.width = w.innerWidth;
canvas.height = w.innerHeight;
let particlesArray = [];
let adjustX = 50;
let adjustY = 35;
ctx.lineWidth = 2;
let shiftTextX = w.innerWidth / 5 / 2 - 70;
let shiftTextY = 5;

//Handle Mouse
const mouse = {
  x: null,
  y: null,
  radius: 150,
};

w.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
});

ctx.fillStyle = "whitesmoke";
ctx.font = "40px Verdana";
ctx.fillText("Hey", -5, 55);
const textCoordinates = ctx.getImageData(0, 0, 200, 200);

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 3;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 15 + 2;
    this.distance;
  }
  draw() {
    ctx.fillStyle = "whitesmoke";
    ctx.beginPath();

    if (this.distance < mouse.radius - 5) {
      this.size = 20;
      ctx.fillStyle = "whitesmoke";
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    } else if (this.distance <= mouse.radius) {
      this.size = 15;
      ctx.fillStyle = "whitesmoke";
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    } else {
      this.size = 10;
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    }

    ctx.closePath();
    ctx.fill();
  }
  update() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    this.distance = distance;
    let forceDirectionX = (dx / distance) * 3;
    let forceDirectionY = (dy / distance) * 3;
    let maxDistance = mouse.radius;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;

    if (distance < mouse.radius) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 15;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 15;
      }
    }
  }
}

function init() {
  particlesArray = [];
  for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
    for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
      if (
        textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] > 128
      ) {
        // let positionX = x + adjustX;
        // let positionY = y + adjustY;
        let positionX = x + shiftTextX;
        let positionY = y + shiftTextY;
        particlesArray.push(new Particle(positionX * 7, positionY * 7));
      }
    }
  }
}
init();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].draw();
    particlesArray[i].update();
  }
  requestAnimationFrame(animate);
}
animate();

w.addEventListener("resize", function () {
  canvas.width = w.innerWidth;
  canvas.height = w.innerHeight;
  let particlesArray = [];

  shiftTextX = w.innerWidth / 5 / 2 - 70;
});
