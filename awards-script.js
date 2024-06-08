// Add event listeners to toggle sections
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach(function(section) {
      const header = section.querySelector("h2");
      header.addEventListener("click", function() {
        section.classList.toggle("open");

        
      });const toggleButton = document.getElementById('toggle-button');
      const allAdlTeamsSection = document.getElementById('all-adl-teams');
      const preseasonAllAdlTeamsSection = document.getElementById('preseason-all-adl-teams');
      
      toggleButton.addEventListener('click', () => {
        allAdlTeamsSection.style.display = allAdlTeamsSection.style.display === 'none'? 'block' : 'none';
        preseasonAllAdlTeamsSection.style.display = preseasonAllAdlTeamsSection.style.display === 'none'? 'block' : 'none';
      });
    });
  });