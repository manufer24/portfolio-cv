export default function language() {
  const $flagsElements = document.getElementById("flags");

  const changeLanguage = async (language) => {
    if (language === "es")
      location.href = "https://manufer24.github.io/portfolio-cv/es/inicio.html";
    if (language === "en")
      location.href = "https://manufer24.github.io/portfolio-cv/home.html";
  };

  $flagsElements.addEventListener("click", (e) =>
    changeLanguage(e.target.parentElement.dataset.language)
  );
}
