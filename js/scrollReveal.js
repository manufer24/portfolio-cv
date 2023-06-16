export default function scrollReveal() {
  const reveals = document.querySelectorAll(".reveal"),
    cardTitle = document.querySelectorAll(".card-title"),
    pShow = document.querySelectorAll(".p-show");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight,
      revealTop = reveals[i].getBoundingClientRect().top;

    if (revealTop < windowHeight) reveals[i].classList.add("contentReveal");
    else reveals[i].classList.remove("contentReveal");
  }

  for (let i = 0; i < cardTitle.length; i++) {
    const windowHeight = window.innerHeight,
      revealCardTop = cardTitle[i].getBoundingClientRect().top;

    if (revealCardTop < windowHeight) cardTitle[i].classList.add("zoom-out-fade-in");
    else cardTitle[i].classList.remove("zoom-out-fade-in");
  }

  for (let i = 0; i < pShow.length; i++) {
    const windowHeight = window.innerHeight,
      pRevealTop = pShow[i].getBoundingClientRect().top;

    if (pRevealTop < windowHeight) pShow[i].classList.add("slide-up-fade-in");
    else pShow[i].classList.remove("slide-up-fade-in");
  }
}
