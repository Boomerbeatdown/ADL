// Get the buttons and sections
const btn2023 = document.getElementById('2023-btn');
const btn2024 = document.getElementById('2024-btn');
const btn2025 = document.getElementById('2025-btn');
const section2023 = document.getElementById('Draft-Information-2023');
const section2024 = document.getElementById('Draft-Information-2024');
const section2025 = document.getElementById('Draft-Information-2025');

// Add event listeners to the buttons
btn2023.addEventListener('click', () => {
  section2023.style.display = 'block';
  section2024.style.display = 'none';
  section2025.style.display = 'none';
});

btn2024.addEventListener('click', () => {
  section2023.style.display = 'none';
  section2024.style.display = 'block';
  section2025.style.display = 'none';
});

btn2025.addEventListener('click', () => {
  section2023.style.display = 'none';
  section2024.style.display = 'none';
  section2025.style.display = 'block';
});