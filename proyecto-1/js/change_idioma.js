export default function idioma() {
  const $flagsIcons = document.getElementById("flag-icon");

  const changeIdioma = async (idioma) => {
    if (idioma === "spanish")
      location.href =
        "https://manufer24.github.io/portfolio-cv/proyecto-1/spanish/indexSpanish.html";
    if (idioma === "portuguesse")
      location.href =
        "https://manufer24.github.io/portfolio-cv/proyecto-1/portuguesse/indexPortuguesse.html";
    if (idioma === "english")
      location.href =
        "https://manufer24.github.io/portfolio-cv/proyecto-1/indexEnglish.html";
  };

  $flagsIcons.addEventListener("click", (e) => {
    changeIdioma(e.target.parentElement.dataset.idioma);
    console.log(e.target.parentElement.dataset.idioma);
  });
}
