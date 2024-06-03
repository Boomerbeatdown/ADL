class Team {
    constructor(name, wins, losses, pointsScored, pointsAllowed) {
        this.name = name;
        this.wins = wins;
        this.losses = losses;
        this.pointsScored = pointsScored;
        this.pointsAllowed = pointsAllowed;
    }

    calculatePowerScore() {
        return (this.wins * 2) + ((this.pointsScored - this.pointsAllowed) / 100);
    }
}

const teams = [
    new Team("Team A", 10, 2, 300, 150),
    new Team("Team B", 8, 4, 280, 200),
    new Team("Team C", 9, 3, 310, 180),
    new Team("Team D", 7, 5, 270, 220),
    new Team("Team E", 6, 6, 260, 230),
];

function rankTeams(teams) {
    teams.forEach(team => {
        team.powerScore = team.calculatePowerScore();
    });

    teams.sort((a, b) => b.powerScore - a.powerScore);

    const tbody = document.querySelector('#rankings-table tbody');
    tbody.innerHTML = '';

    teams.forEach((team, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${team.name}</td>
            <td>${team.wins}</td>
            <td>${team.losses}</td>
            <td>${team.pointsScored}</td>
            <td>${team.pointsAllowed}</td>
            <td>${team.powerScore.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    rankTeams(teams);
});
