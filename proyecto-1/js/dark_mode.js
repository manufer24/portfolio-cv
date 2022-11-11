const d = document;

export default function darkMode(dark, light, btnFlags) {
  const $darkMode = d.getElementById("dark"),
    $lightMode = d.getElementById("light"),
    $btnFlags = d.querySelector(btnFlags),
    currentTheme = localStorage.getItem("theme");

  if (currentTheme === "light") d.body.classList.add("light");
  if (currentTheme === "dark") d.body.classList.add("dark");

  d.addEventListener("click", (e) => {
    if (e.target.matches(dark)) {
      d.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      $darkMode.classList.toggle("hidden");
      $lightMode.classList.toggle("hidden");
    }
    if (e.target.matches(light)) {
      d.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      $darkMode.classList.toggle("hidden");
      $lightMode.classList.toggle("hidden");
    }

    if (e.target.matches(btnFlags)) {
      $btnFlags.classList.toggle("flags-active");
    }

    if (!e.target.matches(btnFlags)) {
      $btnFlags.classList.remove("flags-active");
    }
  });
}
