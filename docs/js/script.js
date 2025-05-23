// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Simple contact form validation
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function(e) {
    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = "red";
        valid = false;
      } else {
        input.style.borderColor = "#ccc";
      }
    });
    if (!valid) {
      e.preventDefault();
      alert("Please fill out all fields.");
    }
  });
}
