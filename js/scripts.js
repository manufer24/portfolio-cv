const d = document,
  w = window;

const $btnMenu = d.querySelector("#toggle"),
  $menu = d.querySelector("#menu"),
  $menuItem = d.querySelectorAll(".menu-item"),
  $menuIcons = d.querySelector(".menu-iconos"),
  $subMenus = d.querySelectorAll(".submenu"),
  $subMenuBtn = d.querySelectorAll(".submenu-btn"),
  $overlay = d.querySelector("#overlay");

$btnMenu.addEventListener("click", () => {
  $menu.classList.add("show");

  $overlay.style.display = $menu.classList.contains("show") ? "block" : "none";

  $menuItem.forEach((menuItem) => {
    menuItem.style.animation = "animationLinkMenu 0.5s ease forwards var(--i)";
  });

  $menuIcons.style.animation = "animationLinkMenu 0.5s ease forwards var(--i)";
});

$overlay.addEventListener("click", function () {
  $menu.classList.remove("show");

  $subMenus.forEach((subMenu) => {
    subMenu.style.height !== "0px" && (subMenu.style.height = "0px");
  });

  $subMenuBtn.forEach(($subMenuBtn) => {
    $subMenuBtn.classList.remove("arrow");
  });

  $btnMenu.classList.remove("open");

  this.style.display = "none";

  $menuItem.forEach((menuItem) => {
    menuItem.style.animation = "none";
  });

  $menuIcons.style.animation = "none";
});

$subMenuBtn.forEach(($subMenuBtn) => {
  $subMenuBtn.addEventListener("click", function () {
    if (window.innerWidth < 1024) {
      $subMenuBtn.classList.toggle("arrow");
      const $subMenu = this.nextElementSibling;

      const height = $subMenu.scrollHeight;

      $subMenu.style.height =
        $subMenu.style.height && $subMenu.style.height !== "0px"
          ? "0px"
          : height + "px";
    }
  });
});

//DARK SETTINGS

const $darkMode = d.getElementById("dark"),
  $middleMode = d.getElementById("middle"),
  $lightMode = d.getElementById("light"),
  $darkSetting = d.getElementById("dark-setting"),
  prefersDarkScheme = w.matchMedia("(prefers-color-scheme: dark)"),
  currentTheme = localStorage.getItem("theme");

let theme = "light";

if (currentTheme === "dark") d.body.classList.add("dark-theme");

if (currentTheme === "middle") d.body.classList.add("middle-theme");

if (currentTheme === "light") d.body.classList.add("light-theme");

if (prefersDarkScheme.matches) d.body.classList.toggle("dark-theme");

d.addEventListener("click", function (e) {
  if (e.target.closest(".dark-setting-tools")) return;
  if (e.target.closest(".dark-setting")) return;
  $darkSetting.nextElementSibling.classList.remove("show-tools");
});

$darkSetting.addEventListener("click", () => {
  $darkSetting.nextElementSibling.classList.toggle("show-tools");
});

$darkMode.addEventListener("click", function () {
  d.body.classList.add("dark-theme");
  d.body.classList.remove("middle-theme");
  d.body.classList.remove("light-theme");
  keepStyle();
});

$middleMode.addEventListener("click", function () {
  d.body.classList.add("middle-theme");
  d.body.classList.remove("dark-theme");
  d.body.classList.remove("light-theme");
  keepStyle();
});

$lightMode.addEventListener("click", function () {
  d.body.classList.add("light-theme");
  d.body.classList.remove("dark-theme");
  d.body.classList.remove("middle-theme");
  keepStyle();
});

function keepStyle() {
  if (d.body.classList.contains("dark-theme")) theme = "dark";
  if (d.body.classList.contains("light-theme")) theme = "light";
  if (d.body.classList.contains("middle-theme")) theme = "middle";
  localStorage.setItem("theme", theme);
}

// CHANGE LANGUAGE

const $flagsElements = document.getElementById("flags"),
  $textsToChange = document.querySelectorAll("[data-section]"),
  $html = document.querySelector(".html");

let currentIdiom = localStorage.getItem("idiom");

const changeLanguage = async (language) => {
  try {
    let res = await fetch(`./languages/${language}.json`),
      json = await res.json();

    if (!res.ok) throw { status: res.status, statuText: res.statusText };

    for (let textToChange of $textsToChange) {
      let section = textToChange.dataset.section,
        value = textToChange.dataset.value;

      textToChange.innerHTML = json[section][value];
    }
  } catch (err) {
    console.log(`${err.statusText} // Ocurrió un error`);
  }

  $html.setAttribute("lang", `${language}`);
};

$flagsElements.addEventListener("click", function (e) {
  localStorage.setItem("idiom", e.target.parentElement.dataset.language);
  changeLanguage(e.target.parentElement.dataset.language);
});

if (currentIdiom === "es") changeLanguage(currentIdiom);
if (currentIdiom === "en") changeLanguage(currentIdiom);
if (currentIdiom === "pt") changeLanguage(currentIdiom);
