// Add event listeners to toggle sections
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach(function(section) {
      const header = section.querySelector("h2");
      header.addEventListener("click", function() {
        section.classList.toggle("open");
      });
    });
  });