const bar = document.getElementById("bar");
const navLinks = document.getElementById("navbar");
const close = document.getElementById("close");

//click to open hamburger menu
if (bar) {
  bar.addEventListener("click", () => {
    navLinks.classList.add("active");
  });
}
//click to close hamburger menu
if (close) {
  close.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
}
