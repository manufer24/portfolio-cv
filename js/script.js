import menu from "./menu.js";
import darkMode from "./dark_mode.js";
import liquidBg from "./liquid_bg.js";
import txtAnimation from "./txt_animation.js";
import liquidFooter from "./liquid_footer.js";
import language from "./change_language.js";
import contactFormValidation from "./form_validation.js";
import networkStatus from "./network_status.js";
import scrollReveal from "./scroll_reveal.js";
import preLoader from "./pre_loader.js";
import eyesFollowing from "./eyes_following.js";
import animationHomePage from "./animation_home_page.js";

document.addEventListener("DOMContentLoaded", () => {
  menu();
  darkMode();
  liquidBg();
  txtAnimation();
  language();
  contactFormValidation();
  liquidFooter();
  eyesFollowing();
});

networkStatus();

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", () => {
  preLoader();
  animationHomePage();
});

