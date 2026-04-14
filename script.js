// ================================
// AIVONEX DIGITAL - INTERACTIONS
// ================================

// Mobile nav toggle (simple enhancement)
function toggleMenu() {
  const links = document.querySelector(".nav-links");
  links.classList.toggle("active");
}

// Smooth scroll enhancement
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});