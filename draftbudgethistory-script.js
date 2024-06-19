const yearSelect = document.getElementById('year-select');

yearSelect.addEventListener('change', function() {
  const selectedYear = yearSelect.value;
  const tables = document.querySelectorAll('.table-container');

  tables.forEach(function(table) {
    if (table.id === selectedYear) {
      table.classList.remove('hidden');
    } else {
      table.classList.add('hidden');
    }
  });
});