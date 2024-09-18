// Footer
// Set current year
document.getElementById("current-year").textContent = new Date().getFullYear();

// Handle form submission
document
  .getElementById("subscribe-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with: ${email}`);
    this.reset();
  });
