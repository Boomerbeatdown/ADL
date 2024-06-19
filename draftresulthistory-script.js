const switchButtons = document.querySelectorAll('button');
const draftResults = document.querySelector('#draft-results');
const years = ['2024', '2025', '2026'];
let currentYear = 0;

switchButtons.forEach((button, i) => {
  button.addEventListener('click', () => {
    // Hide all tables
    years.forEach(year => {
      const tbody = document.querySelector(`#${year}`);
      tbody.classList.add('hidden');
    });

    // Show the selected table
    const tbody = document.querySelector(`#${years[i]}`);
    tbody.classList.remove('hidden');
    currentYear = i;
  });
});

// Show the initial table
draftResults.querySelector(`#${years[currentYear]}`).classList.remove('hidden');