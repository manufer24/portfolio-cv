export default function txtAnimation() {
  const move = document.querySelectorAll(".hola ");

  move.forEach((el) => {
    el.addEventListener("mouseenter", function () {
      el.style.animation = "pulse 0.8s cubic-bezier(0.3, -0.07, 0.47, 1.5)";
      el.style.color = "var(--txt-hover)";
      setTimeout(() => {
        el.style.animation = " none";
      }, 1000);

      setTimeout(() => {
        el.style.color = "var(--text-color)";
      }, 700);
    });
  });

}
