export default function mouseTail() {
  //Canvas Setup
  const canvas = document.getElementById("canvas2");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let particleArray = [];
  const numberOfParticles = 150;

  // Get mouse position

  const mouse = {
    x: null,
    y: null,
  };

  window.addEventListener("mousemove", function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  setInterval(function () {
    mouse.x = undefined;
    mouse.y = undefined;
  }, 200);

  // Create particles

  class Particle {
    constructor(x, y, size, color, weight) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
      this.weight = weight;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    update() {
      this.size -= 0.1;
      if (this.size < 0) {
        this.x = mouse.x + (Math.random() * 20 - 10);
        this.y = mouse.y + (Math.random() * 20 - 10);
        this.size = Math.random() * 5 + 3;
        this.weight = Math.random() * 5 - 0.5;
      }
      this.y += this.weight;
      this.weight += 0.2;
      if (this.y > canvas.height - this.size) {
        this.weight *= -0.2;
      }
    }
  }

  function init() {
    particleArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let size = Math.random() * 5 + 1;
      let color = "#e7562e";
      let weight = 1;
      particleArray.push(new Particle(x, y, size, color, weight));
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].update();
      // particleArray[i].draw();
    }
    connect();
    requestAnimationFrame(animate);
  }

  init();
  animate();

  function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particleArray.length; a++) {
      for (let b = a; b < particleArray.length; b++) {
        let distance = Math.sqrt(
          (particleArray[a].x - particleArray[b].x) *
            (particleArray[a].x - particleArray[b].x) +
            (particleArray[a].y - particleArray[b].y) *
              (particleArray[a].y - particleArray[b].y)
        );
        if (distance < 110) {
          opacityValue = 1 - distance / 100;
          ctx.strokeStyle = "rgba(231,118,46," + opacityValue + ")";
          ctx.beginPath();
          ctx.lineWidth = 2;
          ctx.moveTo(particleArray[a].x, particleArray[a].y);
          ctx.lineTo(particleArray[b].x, particleArray[b].y);
          ctx.stroke();
        }
      }
    }
  }
}
