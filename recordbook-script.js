// sample data
const owners = [
    { name: "Owner 1", team: "Team 1" },
    { name: "Owner 2", team: "Team 2" },
    //...
];

const teams = [
    { name: "Team 1", wins: 0, losses: 0, ties: 0 },
    { name: "Team 2", wins: 0, losses: 0, ties: 0 },
    //...
];

const players = [
    {
        position: "QB",
name: "Player 1",
        team: "Team 1",
        careerStats: "1000 yards, 10 TDs",
        seasonStats: "500 yards, 5 TDs",
        gameStats: "200 yards, 2 TDs"
    },
    {
        position: "RB",
        name: "Player 2",
        team: "Team 2",
        careerStats: "500 yards, 5 TDs",
        seasonStats: "200 yards, 2 TDs",
        gameStats: "100 yards, 1 TD"
    },
    //...
];

// insert owner data
const ownerTableBody = document.getElementById("owner-table-body");
owners.forEach((owner) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${owner.name}</td>
        <td>${owner.team}</td>
    `;
    ownerTableBody.appendChild(row);
});

// insert team data
const teamTableBody = document.getElementById("team-table-body");
teams.forEach((team) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${team.name}</td>
        <td>${team.wins}</td>
        <td>${team.losses}</td>
        <td>${team.ties}</td>
    `;
    teamTableBody.appendChild(row);
});

// insert player data
const playerTabs = document.getElementById("player-tabs");
const playerContent = document.getElementById("player-content");
players.forEach((player) => {
    const tab = document.createElement("li");
    tab.innerHTML = `<a href="#${player.position.toLowerCase()}-tab">${player.position}</a>`;
    playerTabs.appendChild(tab);

    const tableBody = document.getElementById(`${player.position.toLowerCase()}-table-body`);
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${player.name}</td>
        <td>${player.team}</td>
        <td>${player.careerStats}</td>
        <td>${player.seasonStats}</td>
        <td>${player.gameStats}</td>
    `;
    tableBody.appendChild(row);
});

// add event listener to player tabs
playerTabs.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        const tabId = e.target.getAttribute("href").replace("#", "");
        const tabContent = document.getElementById(tabId);
        const currentActiveTab = document.querySelector("#player-content div.active");
        if (currentActiveTab) {
            currentActiveTab.classList.remove("active");
        }
        tabContent.classList.add("active");
        playerContent.style.display = "block";
    }
});