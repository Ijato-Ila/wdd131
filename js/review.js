// ===== Review Counter with localStorage =====
window.addEventListener("DOMContentLoaded", () => {
  let count = Number(localStorage.getItem("reviewCount")) || 0;
  count++;
  localStorage.setItem("reviewCount", count);

  const counterElement = document.getElementById("reviewCounter");
  counterElement.textContent = `Total reviews submitted: ${count}`;
});
