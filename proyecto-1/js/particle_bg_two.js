export default function particleBgTwo() {
  const canvas = document.getElementById("canvas4");
  const ctx = canvas.getContext("2d");
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  let particleArray;

  //create constructor function
  function particle(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  //add draw method to particle prototype

  particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  //add update method to particle prototype
  particle.prototype.update = function () {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.directionY = -this.directionY;
    }
    // move particle
    this.x += this.directionX;
    this.y += this.directionY;
    // call draw method
    this.draw();
  };
  // create particle array
  function init() {
    particleArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    for (let i = 0; i < numberOfParticles * 2; i++) {
      let size = Math.random() * 5 + 1;
      let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
      let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
      let directionX = Math.random() * 5 - 2.5;
      let directionY = Math.random() * 5 - 2.5;
      let color = "#e7562e";

      particleArray.push(
        new particle(x, y, directionX, directionY, size, color)
      );
    }
  }
  //create animation loop
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].update();
    }
  }
  init();
  animate();

  // RESIZE SETTING - empty and refill particle array every time window changes size + change canvas size
  window.addEventListener("resize", function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
  });
}
