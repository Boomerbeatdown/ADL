function showYear(year) {
    document.getElementById("2024").classList.add("hidden");
    document.getElementById("2025").classList.add("hidden");
    document.getElementById("2026").classList.add("hidden");
  
    document.getElementById("draft-year").innerText = "Rookie Draft Lottery History (" + year + ")";
    document.getElementById(year).classList.remove("hidden");
  }
  
  showYear(2024);