const teams = ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6", "Team 7", "Team 8"];
const players = [];
for (let i = 1; i <= 256; i++) {
    players.push(`Player ${i}`);
}

const draftResults = [];
for (let round = 1; round <= 8; round++) {
    const roundResults = [];
    for (let teamIndex = 0; teamIndex < 8; teamIndex++) {
        const playerIndex = Math.floor(Math.random() * players.length);
        const player = players.splice(playerIndex, 1)[0];
        const amount = Math.floor(Math.random() * 100) + 1; // random amount between 1 and 100
        roundResults.push({ player, amount });
    }
    draftResults.push(roundResults);
}

const draftResultsBody = document.getElementById("draft-results-body");
draftResults.forEach((roundResults, roundIndex) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${roundIndex + 1}</td>`;
    roundResults.forEach((result) => {
        if (result.player) {
            row.innerHTML += `<td>${result.player} - $${result.amount}</td>`;
        } else {
            row.innerHTML += `<td>N/A - $0</td>`;
        }
    });
    draftResultsBody.appendChild(row);
});