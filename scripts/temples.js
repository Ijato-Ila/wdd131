// temples.js - controls footer year/date + hamburger menu

document.addEventListener("DOMContentLoaded", function () {
  // 1. FOOTER YEAR
  const yearEl = document.getElementById("currentyear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. FOOTER LAST MODIFIED
  const lastEl = document.getElementById("lastModified");
  if (lastEl) {
    lastEl.textContent = "Last Modified: " + document.lastModified;
  }

  // 3. HAMBURGER MENU TOGGLE
  const menuBtn = document.getElementById("menu-btn");
  const nav = document.getElementById("main-nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      // Toggle the "open" class on nav
      const opened = nav.classList.toggle("open");

      // Change button symbol ☰ - ✕
      menuBtn.textContent = opened ? "✕" : "☰";

      // Update accessibility attribute
      menuBtn.setAttribute("aria-expanded", opened ? "true" : "false");
    });

    // BONUS: if window is resized wider, reset menu
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 800) {
        nav.classList.remove("open");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }
});
