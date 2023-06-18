export default function scrollReveal() {
  const reveals = document.querySelectorAll(".reveal"),
    cardTitle = document.querySelectorAll(".card-title")

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
}
