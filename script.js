function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// Fade-in Animation on Scroll
function fadeInOnScroll() {
  const fadeElements = document.querySelectorAll(".section-container, .about-details-container, .experience-details-container");
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

document.addEventListener("scroll", fadeInOnScroll);
document.addEventListener("DOMContentLoaded", fadeInOnScroll);

// Initial Style for Fade-in Elements
document.querySelectorAll(".section-container, .about-details-container, .experience-details-container").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
});