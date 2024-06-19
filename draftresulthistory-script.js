document.getElementById('year-select').addEventListener('change', function() {
    var year = this.value;
    document.getElementById('draft-results-2024').style.display = year === '2024'? 'block' : 'none';
    document.getElementById('draft-results-2025').style.display = year === '2025'? 'block' : 'none';
    document.getElementById('draft-results-2026').style.display = year === '2026'? 'block' : 'none';
  });