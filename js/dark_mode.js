const d = document;

export default function darkMode() {
  const $darkMode = d.getElementById("dark"),
    $middleMode = d.getElementById("middle"),
    $lightMode = d.getElementById("light"),
    currentTheme = localStorage.getItem("theme");
  // rootStyles = d.documentElement.style;

  if (currentTheme === "dark") d.body.classList.add("dark");
  if (currentTheme === "middle") d.body.classList.add("middle");
  if (currentTheme === "light") d.body.classList.add("light");

  $darkMode.addEventListener("click", () => {
    d.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    // rootStyles.setProperty("--txt-hover", rgb(185, 2, 2));
    window.location.reload();
  });

  $middleMode.addEventListener("click", () => {
    d.body.classList.add("middle");
    localStorage.setItem("theme", "middle");
    // rootStyles.setProperty("--txt-hover", rgb(255, 215, 0));
    window.location.reload();
  });

  $lightMode.addEventListener("click", () => {
    d.body.classList.remove("dark");
    localStorage.clear("theme", "dark");
    localStorage.clear("theme", "middle");
    // rootStyles.setProperty("--txt-hover", rgb(2, 69, 194));
    window.location.reload();
  });
}
