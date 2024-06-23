document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button[id^="switch-"]');
  const tableBodies = document.querySelectorAll('tbody[id]');
  const h2Element = document.querySelector('h2');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const year = button.id.replace('switch-', '');
      console.log(`Button clicked: ${year}`); // Add a log to check if the button is clicked
      if (year) { // Add a check to make sure the year is not empty
        tableBodies.forEach((tbody) => {
          if (tbody.id !== year) {
            tbody.style.display = 'none';
          } else {
            tbody.style.display = 'table-row-group';
          }
        });
        const h2Text = `Rookie Draft Results for ${year}`;
        h2Element.textContent = h2Text;
      } else {
        console.log('Error: Year is empty');
      }
    });
  });
});