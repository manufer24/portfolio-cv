import darkMode from "./dark_mode.js";
import contactFormValidation from "./form_validation.js";
import menu from "./menu.js";
import mouseTail from "./mouse_tail.js";
import networkStatus from "./network_status.js";
import particleBg from "./particle_bg.js";
import particleBgTwo from "./particle_bg_two.js";
import scrollReveal from "./scrollReveal.js";
import preLoader from "./pre_loader.js";
import idioma from "./change_idioma.js";

document.addEventListener("DOMContentLoaded", () => {
  menu("#btnMenu div", "#overlay", ".menu-link");
  darkMode("#dark i", "#light i", "#flag-icon i");
  particleBg();
  particleBgTwo();
  contactFormValidation();
  mouseTail();
  idioma();
});

networkStatus();
window.addEventListener("load", preLoader);
window.addEventListener("scroll", scrollReveal);
