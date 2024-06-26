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
  setupJumpLinks(); // Call setupJumpLinks() here
});

btn2024.addEventListener('click', () => {
  section2023.style.display = 'none';
  section2024.style.display = 'block';
  section2025.style.display = 'none';
  setupJumpLinks(); // Call setupJumpLinks() here
});

btn2025.addEventListener('click', () => {
  section2023.style.display = 'none';
  section2024.style.display = 'none';
  section2025.style.display = 'block';
  setupJumpLinks(); // Call setupJumpLinks() here
});

// Function to set up the jump links
function setupJumpLinks() {
  // Get the currently displayed section
  const currentSection = document.querySelector('.section:visible');

  // Get the IDs of the links and sections within the current section
  const linkIds = Array.from(currentSection.querySelectorAll('.jump-link')).map(link => link.hash);
  const sectionIds = Array.from(currentSection.querySelectorAll('div[id]')).map(section => `#${section.id}`);

  // Get all the jump links on the page that match the current section
  const jumpLinks = document.querySelectorAll(linkIds.join(','));

  // Add an event listener to each jump link
  jumpLinks.forEach(link => {
    link.addEventListener('click', event => {
      // Prevent the default link behavior
      event.preventDefault();

      // Get the hash from the link
      const hash = link.hash;

      // Scroll to the element with the matching ID
      document.querySelector(hash).scrollIntoView();
    });
  });
}