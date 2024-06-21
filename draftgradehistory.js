document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", function() {
            const year = button.id.split("-")[1];
            showTable(year);
        });
    });
});

function showTable(year) {
    console.log(`Showing table for year ${year}`); // Debugging statement
    document.querySelectorAll(`table:not([id="${year}"])`).forEach((table) => {
        console.log(`Hiding table with id ${table.id}`); // Debugging statement
        table.style.display = "none";
    });
    console.log(`Showing table with id ${year}`); // Debugging statement
    document.getElementById(year).style.display = "block";
}