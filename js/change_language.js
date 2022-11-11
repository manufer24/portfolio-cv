export default function language() {
  const $flagsElements = document.getElementById("flags");

  const changeLanguage = async (language) => {
    if (language === "es") location.href = "/es/index.html";
    else if (language === "pt") location.href = "/pt/index.html";
    else location.href = "/index.html";
  };

  $flagsElements.addEventListener("click", (e) =>
    changeLanguage(e.target.parentElement.dataset.language)
  );
}
