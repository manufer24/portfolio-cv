const d = document;

export default function darkMode() {
  const $darkMode = d.getElementById("dark"),
    $middleMode = d.getElementById("middle"),
    $lightMode = d.getElementById("light"),
    currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") d.body.classList.add("dark");
  if (currentTheme === "middle") d.body.classList.add("middle");
  if (currentTheme === "light") d.body.classList.add("light");

  $darkMode.addEventListener("click", () => {
    d.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    window.location.reload();
  });

  $middleMode.addEventListener("click", () => {
    d.body.classList.add("middle");
    localStorage.setItem("theme", "middle");
    window.location.reload();
  });

  $lightMode.addEventListener("click", () => {
    d.body.classList.remove("dark");
    localStorage.clear("theme", "dark");
    localStorage.clear("theme", "middle");
    window.location.reload();
  });
}
