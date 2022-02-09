const toggleMenu = document.getElementsByClassName("toggle-menu")[0];
const navLinks = document.getElementsByClassName("navbar")[0];

toggleMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
