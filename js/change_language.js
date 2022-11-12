export default function language() {
  const $flagsElements = document.getElementById("flags");

  const changeLanguage = async (language) => {
    if (language === "es")
      location.href = "https://manufer24.github.io/portfolio-cv/es/index.html";
    else if (language === "pt")
      location.href = "https://manufer24.github.io/portfolio-cv/pt/index.html";
    else location.href = "https://manufer24.github.io/portfolio-cv/index.html";
  };

  $flagsElements.addEventListener("click", (e) =>
    changeLanguage(e.target.parentElement.dataset.language)
  );
}
