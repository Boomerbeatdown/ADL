document.getElementById('toggle-trades').addEventListener('click', function() {
    var tradesContainer = document.getElementById('trades-container');
    tradesContainer.style.display = tradesContainer.style.display === 'none'? 'block' : 'none';
  });