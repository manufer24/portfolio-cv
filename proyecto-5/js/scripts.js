const d = document,
  $menu_wrapper = d.querySelector(".wrapper"),
  $menu_bar = d.querySelector(".menu-bar"),
  $setting_drop = d.querySelector(".setting-drop"),
  $help_drop = d.querySelector(".help-drop"),
  $theme_drop = d.querySelector(".theme-drop"),
  $language_drop = d.querySelector(".language-drop");

d.addEventListener("click", (e) => {
  if (e.target.matches(".drop-btn")) {
    $menu_wrapper.classList.toggle("show");
    if ($setting_drop.classList.contains("visible")) {
      $setting_drop.classList.remove("visible");
      $language_drop.classList.remove("visible");
      $theme_drop.classList.remove("visible");
      setTimeout(() => ($menu_bar.style.marginLeft = "0"), 250);
    }

    if ($help_drop.classList.contains("visible")) {
      $help_drop.classList.remove("visible");
      setTimeout(() => ($menu_bar.style.marginLeft = "0"), 250);
    }
  }

  if (e.target.matches(".drop-btn span"))
    $menu_wrapper.classList.toggle("show");

  if (e.target.matches(".show-settings")) {
    $setting_drop.classList.toggle("visible");
    $menu_bar.style.marginLeft = "-270px";
  }

  if (e.target.matches(".show-help")) {
    $help_drop.classList.toggle("visible");
    $menu_bar.style.marginLeft = "-540px";
  }

  if (e.target.matches(".show-theme")) {
    $theme_drop.classList.toggle("visible");
    $menu_bar.style.marginLeft = "-810px";
  }
  if (e.target.matches(".show-language")) {
    $language_drop.classList.toggle("visible");
    $menu_bar.style.marginLeft = "-1080px";
  }

  if (e.target.matches(".back-setting-btn span")) {
    $setting_drop.classList.toggle("visible");
    setTimeout(() => ($menu_bar.style.marginLeft = "0"), 250);
  }

  if (e.target.matches(".back-setting-btn")) {
    $setting_drop.classList.toggle("visible");
    setTimeout(() => ($menu_bar.style.marginLeft = "0"), 250);
  }

  if (e.target.matches(".back-help-btn span")) {
    $help_drop.classList.toggle("visible");
    setTimeout(() => ($menu_bar.style.marginLeft = "0"), 250);
  }

  if (e.target.matches(".back-theme-btn span")) {
    $theme_drop.classList.toggle("visible");
    $setting_drop.classList.add("visible");
    $menu_bar.style.marginLeft = "-270px";
  }

  if (e.target.matches(".back-theme-btn")) {
    $theme_drop.classList.toggle("visible");
    $setting_drop.classList.add("visible");
    $menu_bar.style.marginLeft = "-270px";
  }

  if (e.target.matches(".back-language-btn span")) {
    $language_drop.classList.toggle("visible");
    $setting_drop.classList.add("visible");
    $menu_bar.style.marginLeft = "-270px";
  }

  if (e.target.matches(".back-language-btn")) {
    $language_drop.classList.toggle("visible");
    $setting_drop.classList.add("visible");
    $menu_bar.style.marginLeft = "-270px";
  }
});

d.addEventListener("mouseup", (e) => {
  if (e.target.closest(".nav-bar")) return;

  $menu_wrapper.classList.remove("show");
  $help_drop.classList.remove("visible");
  $setting_drop.classList.remove("visible");
  $theme_drop.classList.remove("visible");
  $language_drop.classList.remove("visible");
  setTimeout(() => ($menu_bar.style.marginLeft = "0"), 250);
});

// ********CHANGE LANGUAGE********
const $languageElements = document.getElementById("language"),
  $textsToChange = document.querySelectorAll("[data-section]");

let currentIdiom = localStorage.getItem("idiom");

const changeLanguage = async (language) => {
  try {
    let res = await fetch(
        `https://manufer24.github.io/portfolio-cv/proyecto-5/languages/${language}.json`
      ),
      json = await res.json();

    if (!res.ok) throw { status: res.status, statuText: res.statusText };

    for (let textToChange of $textsToChange) {
      let section = textToChange.dataset.section,
        value = textToChange.dataset.value;

      textToChange.innerHTML = json[section][value];
    }
  } catch (err) {
    console.log(`${err.statusText} // Ocurrió un error`);
    console.log(err);
  }
};

$languageElements.addEventListener("click", (e) => {
  localStorage.setItem("idiom", e.target.dataset.language);
  changeLanguage(e.target.dataset.language);
  console.log(e.target.dataset.language);
});

if (currentIdiom === "es") changeLanguage(currentIdiom);
if (currentIdiom === "en") changeLanguage(currentIdiom);
if (currentIdiom === "pt") changeLanguage(currentIdiom);

// ********CHANGE THEME********

const $darkMode = d.querySelector(".dark"),
  $lightMode = d.querySelector(".light"),
  currentTheme = localStorage.getItem("theme");

if (currentTheme === "light") d.body.classList.add("light");

$lightMode.addEventListener("click", () => {
  d.body.classList.add("light");
  localStorage.setItem("theme", d.body.classList);
});

$darkMode.addEventListener("click", (e) => {
  d.body.classList.remove("light");
  localStorage.removeItem("theme", d.body.classList);
});
