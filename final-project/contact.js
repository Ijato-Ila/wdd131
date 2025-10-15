// ===============================
// Contact Form Script for Ijato
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const confirmation = document.getElementById("confirmation");
  const greeting = document.getElementById("greeting");

  // Check if user name is saved
  const savedName = localStorage.getItem("visitorName");
  if (savedName) {
    greeting.textContent = `Welcome back, ${savedName}! 😊`;
  }

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop form from refreshing the page

    const name = document.getElementById("name").value.trim();

    if (name !== "") {
      // Save visitor name
      localStorage.setItem("visitorName", name);

      // Show soft confirmation text
      confirmation.textContent = `Thank you, ${name}! 💌 Your message has been sent successfully.`;

      // Reset the form
      form.reset();

      // Optional: Hide confirmation after a few seconds
      setTimeout(() => {
        confirmation.textContent = "";
      }, 5000);
    }
  });
});
