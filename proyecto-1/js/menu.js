const d = document;
export default function menu(btnMenu, overlay, menuLink) {
  const $btnMenu = d.querySelector("#btnMenu div"),
    $menu = d.getElementById("menu"),
    $menuItem = d.querySelectorAll(".menu-animate"),
    $overlay = d.getElementById("overlay");

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnMenu)) {
      $menu.classList.toggle("show-menu");
      $overlay.style.display = "block";
      $menuItem.forEach((menuItem) => {
        menuItem.style.animation =
          "animationLinkMenu 0.5s ease forwards var(--i)";
      });
    }

    if (e.target.matches(overlay)) {
      $menu.classList.remove("show-menu");
      $overlay.style.display = "none";
      $menuItem.forEach((menuItem) => {
        menuItem.style.animation = "none";
      });
    }

    if (e.target.matches(menuLink)) {
      $menu.classList.remove("show-menu");
      $overlay.style.display = "none";
      $menuItem.forEach((menuItem) => {
        menuItem.style.animation = "none";
      });
    }
  });
}
