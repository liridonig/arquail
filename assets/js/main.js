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

const cardsSection = document.querySelector(".cards1");
let lastScrollTop = 0; // To track the last scroll position

// Function to initialize the observer and scroll behavior
function initializeScrollBehavior() {
  // Set up Intersection Observer to detect when the section is fully visible
  const observerOptions = {
    root: null,
    threshold: 1.0, // Trigger when the entire section is visible
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // If fully visible, scroll to the last card
        cardsSection.scrollLeft =
          cardsSection.scrollWidth - cardsSection.clientWidth;
      }
    });
  };

  // Initialize the observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(document.querySelector(".about-homepage"));

  // Scroll event listener
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    if (scrollTop < lastScrollTop) {
      // If scrolling up
      cardsSection.scrollLeft = 0; // Scroll back to the default position
    }

    lastScrollTop = scrollTop; // Update the last scroll position
  });
}

// Function to remove scroll behavior for mobile
function removeScrollBehavior() {
  // Remove event listeners or any other necessary cleanup
  window.removeEventListener("scroll", () => {});
}

// Initialize scroll behavior based on window width
function handleResize() {
  if (window.innerWidth >= 1024) {
    initializeScrollBehavior(); // Apply behavior for desktop
  } else {
    removeScrollBehavior(); // Remove behavior for mobile
  }
}

// Initial check on load
handleResize();

// Check on resize
window.addEventListener("resize", handleResize);
