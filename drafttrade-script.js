// Get the buttons and containers
const switchTo2024 = document.getElementById("switch-2024");
const switchTo2025 = document.getElementById("switch-2025");
const switchTo2026 = document.getElementById("switch-2026");

const container2024 = document.getElementById("2024");
const container2025 = document.getElementById("2025");
const container2026 = document.getElementById("2026");

// Add event listeners to the buttons
switchTo2024.addEventListener("click", function() {
  container2024.classList.remove("hidden");
  container2025.classList.add("hidden");
  container2026.classList.add("hidden");
});

switchTo2025.addEventListener("click", function() {
  container2024.classList.add("hidden");
  container2025.classList.remove("hidden");
  container2026.classList.add("hidden");
});

switchTo2026.addEventListener("click", function() {
  container2024.classList.add("hidden");
  container2025.classList.add("hidden");
  container2026.classList.remove("hidden");
});