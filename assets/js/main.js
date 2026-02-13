// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu toggle
const btn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
if (btn && mobileNav){
  btn.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
  });
}
