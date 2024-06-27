// script.js

document.getElementById('nominate-button').addEventListener('click', function() {
    // Add code to handle nomination form submission
});

document.getElementById('search-button').addEventListener('click', function() {
    // Add code to filter and search inductees
});

document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});