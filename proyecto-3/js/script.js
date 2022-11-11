const d = document;

//Menu

const btnMenu = d.getElementById("btn-menu"),
  btnOpen = d.querySelector(".btn-open"),
  btnClose = d.querySelector(".btn-close"),
  logo = d.querySelector(".logo"),
  navMenu = d.querySelector(".nav-container"),
  header = d.querySelector(".header"),
  menuOverlay = d.getElementById("overlay");

btnMenu.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", toggleMenu);

function toggleMenu() {
  btnOpen.classList.toggle("hidden");
  btnClose.classList.toggle("hidden");
  logo.classList.toggle("hidden");
  navMenu.classList.toggle("hidden");
  header.classList.toggle("bg-white");
  menuOverlay.classList.toggle("hidden");
}

//Slider

const $slider = d.getElementById("slider"),
  $arrowLeft = d.getElementById("arrow-left"),
  $arrowRight = d.getElementById("arrow-right");

let sliderSection = d.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

$slider.insertAdjacentElement("afterbegin", sliderSectionLast);

$arrowRight.addEventListener("click", function () {
  let sliderSectionFirst = d.querySelectorAll(".slider-section")[0];
  $slider.style.marginleft = "-200%";
  // $slider.style.transition = "all  3s ease";
  setTimeout(() => {
    $slider.style.transition = "none";
    $slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    $slider.style.marginleft = "-100%";
  }, 500);
});

$arrowLeft.addEventListener("click", () => {
  let sliderSection = d.querySelectorAll(".slider-section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  $slider.style.marginleft = "0%";
  $slider.style.transition = "margin-left  0.5s ease";
  setTimeout(() => {
    $slider.style.transition = "none";
    $slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    $slider.style.marginleft = "-100%";
  }, 500);
});
