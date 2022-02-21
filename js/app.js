//Toggle Hamburger Menu Selectors
const bar = document.getElementById("bar");
const navLinks = document.getElementById("navbar");
const close = document.getElementById("close");
//selecting small image
//const mainImg = document.getElementById("MainImg");
//const smallImg = document.getElementsByClassName("small-img");

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
//change small shirt img to main img when clicked
/*smallImg[0].addEventListener("click", () => {
  mainImg.src = smallImg[0].src;
});
smallImg[1].addEventListener("click", () => {
  mainImg.src = smallImg[1].src;
});
smallImg[2].addEventListener("click", () => {
  mainImg.src = smallImg[2].src;
});
smallImg[3].addEventListener("click", () => {
  mainImg.src = smallImg[3].src;
});*/
