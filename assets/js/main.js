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
