const openMenuIcon = document.getElementById("menu-toggle-open");
const closeMenuIcon = document.getElementById("menu-toggle-close");
const mobileMenu = document.getElementById("mobile-menu");
const headerOverlay = document.getElementById("header");
const skyImage = document.getElementById("sky");
const grassImage = document.getElementById("grassland");
const mountainsImage = document.getElementById("mountains");
const heroData = document.getElementById("hero-data");

openMenuIcon.addEventListener("click", function () {
  mobileMenu.classList.add("menu-opened");
  headerOverlay.classList.add("menu-opened");
});

closeMenuIcon.addEventListener("click", function () {
  mobileMenu.classList.remove("menu-opened");
  headerOverlay.classList.remove("menu-opened");
});

window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;
  
  grassImage.style.transform = "translateY(" + -scrollPosition * 0.03 + "%)";
  mountainsImage.style.transform = "translateY(" + -scrollPosition * 0.04 + "%)";
  skyImage.style.transform = "translateY(" + -scrollPosition * 0.01 + "%)";
  heroData.style.transform = "translateY(" + -scrollPosition * 0.03 + "%)";
  heroData.style.opacity = 1 - scrollPosition * 0.002;
});