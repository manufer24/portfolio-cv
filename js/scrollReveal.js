export default function scrollReveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight,
      revealTop = reveals[i].getBoundingClientRect().top;

    if (revealTop < windowHeight) reveals[i].classList.add("contentReveal");
    else reveals[i].classList.remove("contentReveal");
  }
}
