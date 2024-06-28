// Populate the recent league activity list
const activityList = document.getElementById('activity-list');
activityList.innerHTML = `
    <li>Team A traded Player X to Team B for Player Y</li>
    <li>Team C made a waiver claim on Player Z</li>
    <li>Team D dropped Player W</li>
`;

// Populate the league chat log
const chatLog = document.getElementById('chat-log');
chatLog.innerHTML = `
    <li>Team A: "Good luck this week!"</li>
    <li>Team B: "Thanks, you too!"</li>
    <li>Team C: "Who's going to win the league?"</li>
`;

// Populate the league standings table
const standingsTable = document.getElementById('standings-table');
standingsTable.innerHTML = `
    <tr>
        <th>Team</th>
        <th>Wins</th>
        <th>Losses</th>
        <th>Ties</th>
    </tr>
    <tr>
        <td>Team A</td>
        <td>5</td>
        <td>2</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Team B</td>
        <td>4</td>
        <td>3</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Team C</td>
        <td>3</td>
        <td>4</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Team D</td>
        <td>2</td>
        <td>5</td>
        <td>1</td>
    </tr>
`;

// Add event listener to the send chat button
const sendChatButton = document.getElementById('send-chat');
sendChatButton.addEventListener('click', () => {
    const chatInput = document.getElementById('chat-input');
    const chatMessage = chatInput.value.trim();
    if (chatMessage!== '') {
        chatLog.innerHTML += `<li>${chatMessage}</li>`;
        chatInput.value = '';
    }
});