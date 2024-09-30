const boxes = document.querySelectorAll(".standby, .standby1");

function checkBox() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom && !box.classList.contains("animated")) {
      if (box.classList.contains("standby")) {
        box.classList.add("fadein");
      } else if (box.classList.contains("standby1")) {
        box.classList.add("fadein1");
      }
      box.classList.add("animated");
    }
  });
}

window.addEventListener("scroll", checkBox);
checkBox();

// toggle navbar
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");

  hamburger.addEventListener("click", function () {
    navbar.classList.toggle("active-nav");
  });
});

// change nav background on scroll
const headerSelect = document.getElementById("header");

function changeBg() {
  const scrollValue = window.scrollY;
  if (scrollValue < 200) {
    headerSelect.classList.remove("header-active");
  } else {
    headerSelect.classList.add("header-active");
  }
}
window.addEventListener("scroll", changeBg);
