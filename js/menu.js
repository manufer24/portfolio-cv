import eyesFollowing from "./eyes_following.js";

const d = document;

export default function menu() {
  const $btnMenu = d.getElementById("btnMenu"),
    $navMenu = d.getElementById("navMenu"),
    $navBg = d.querySelectorAll(".nav-bg"),
    $darkSetting = d.getElementById("dark-setting"),
    toggleColors = d.getElementById("toggle-colors"),
    rootStyles = d.documentElement.style;

  function toggleMenu() {
    $btnMenu.classList.toggle("is-active");

    setTimeout(() => {
      $navMenu.classList.toggle("show");
    }, 1900);

    $navBg.forEach((navBg) => {
      navBg.style.animation = "transitionPage 1s ease  both var(--i)";
      navBg.style.display = "flex";

      setTimeout(() => {
        navBg.style.animation = "endTransitionPage 1s  ease both var(--i)";
      }, 2000);

      setTimeout(() => {
        navBg.style.display = "none";
      }, 4500);
    });
  }

  // SETTINGS BUTTON

  $darkSetting.addEventListener("click", () => {
    $darkSetting.nextElementSibling.classList.toggle("show-tools");
  });

  // TOGGLE COLORS
  let currentColor = localStorage.getItem("color"),
    blueColor = "rgb(2, 69, 194)",
    greenColor = "rgb(2, 180, 91)",
    purpleColor = "rgb(97, 0, 148)",
    orangeColor = "rgb(255, 215, 0)",
    redColor = "rgb(185, 2, 2)";

  if (currentColor === blueColor)
    rootStyles.setProperty("--txt-hover", blueColor);

  if (currentColor === greenColor)
    rootStyles.setProperty("--txt-hover", greenColor);

  if (currentColor === purpleColor)
    rootStyles.setProperty("--txt-hover", purpleColor);

  if (currentColor === orangeColor)
    rootStyles.setProperty("--txt-hover", orangeColor);

  if (currentColor === redColor)
    rootStyles.setProperty("--txt-hover", redColor);

  toggleColors.addEventListener("click", (e) => {
    rootStyles.setProperty("--txt-hover", e.target.dataset.color);

    let color = e.target.dataset.color;

    localStorage.setItem("color", color);

    eyesFollowing();
  });

  d.addEventListener("click", function (e) {
    if (e.target.closest(".dark-setting-tools")) return;
    if (e.target.closest(".dark-setting")) return;
    $darkSetting.nextElementSibling.classList.remove("show-tools");

    if (e.target.matches("#btnMenu div")) toggleMenu();

    if (e.target.matches(".button a")) toggleMenu();
  });
}
