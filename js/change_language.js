export default function language() {
  const $flagsElements = document.getElementById("flags");

  const changeLanguage = async (language) => {
    if (language === "es")
      location.href = "https://manufer24.github.io/portfolio-cv/es/index.html";
    if (language === "pt")
      location.href = "https://manufer24.github.io/portfolio-cv/pt/index.html";
    if (language === "en")
      location.href = "https://manufer24.github.io/portfolio-cv/index.html";
  };

  $flagsElements.addEventListener("click", (e) =>
    changeLanguage(e.target.parentElement.dataset.language)
  );
}
