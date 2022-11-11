export default function eyesFollowing() {
  const canvas = document.getElementById("canvasEyes");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let eyes = [];
  let theta;

  const currentTheme = localStorage.getItem("theme");
  let currentColor = localStorage.getItem("color"),
    blueColor = "rgb(2, 69, 194)",
    greenColor = "rgb(2, 180, 91)",
    purpleColor = "rgb(97, 0, 148)",
    orangeColor = "rgb(255, 215, 0)",
    redColor = "rgb(185, 2, 2)";

  const mouse = {
    x: undefined,
    y: undefined,
  };

  window.addEventListener("mousemove", function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  class Eye {
    constructor(x, y, radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
    }
    draw() {
      // draw eye
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.fillStyle = "rgb(185, 2, 2)";
      if (currentColor === redColor) ctx.fillStyle = "rgb(185, 2, 2)";
      if (currentColor === blueColor) ctx.fillStyle = "rgb(2, 69, 194)";
      if (currentColor === greenColor) ctx.fillStyle = "rgb(2, 180, 91)";
      if (currentColor === purpleColor) ctx.fillStyle = "rgb(97, 0, 148)";
      if (currentColor === orangeColor) ctx.fillStyle = "rgb(255, 215, 0)";
      ctx.fill();
      ctx.closePath();

      //get angle
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      theta = Math.atan2(dy, dx);

      //draw iris
      let iris_x = this.x + (Math.cos(theta) * this.radius) / 10;
      let iris_y = this.y + (Math.sin(theta) * this.radius) / 10;
      let irisRadius = this.radius / 1.2;
      ctx.beginPath();
      ctx.arc(iris_x, iris_y, irisRadius, 0, Math.PI * 2, true);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();
      //draw pupil
      let pupilRadius = this.radius / 2.5;
      let pupil_x = this.x + (Math.cos(theta) * this.radius) / 1.9;
      let pupil_y = this.y + (Math.sin(theta) * this.radius) / 1.9;
      ctx.beginPath();
      ctx.arc(pupil_x, pupil_y, pupilRadius, 0, Math.PI * 2, true);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();

      //draw pupil reflection
      ctx.beginPath();
      ctx.arc(
        pupil_x - pupilRadius / 3,
        pupil_y - pupilRadius / 3,
        pupilRadius / 2,
        0,
        Math.PI * 2,
        true
      );
      ctx.fillStyle = "rgb(230, 230, 230)";
      ctx.fill();
      ctx.closePath();
    }
  }

  function init() {
    eyes = [];
    let overlapping = false;
    let numberOfEyes = 50;
    let protection = 800;
    let counter = 0;

    while (eyes.length < numberOfEyes && counter < protection) {
      let eye = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.floor(Math.random() * 100) + 5,
      };
      overlapping = false;
      for (let i = 0; i < eyes.length; i++) {
        let previousEye = eyes[i];
        let dx = eye.x - previousEye.x;
        let dy = eye.y - previousEye.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < eye.radius + previousEye.radius) {
          overlapping = true;
          break;
        }
      }
      if (!overlapping) eyes.push(new Eye(eye.x, eye.y, eye.radius));

      counter++;
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = "rgb(230, 230, 230)";
    if (currentTheme === "dark") ctx.fillStyle = "rgb(17, 17, 17)";
    if (currentTheme === "middle") ctx.fillStyle = "rgb(34, 40, 49)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < eyes.length; i++) {
      eyes[i].draw();
    }
  }

  init();
  animate();

  window.addEventListener("resize", function () {
    canvas.width = this.innerWidth;
    canvas.height = this.innerHeight;
    init();
  });
}
