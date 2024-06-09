const toggleButton = document.getElementById('toggle-button');
const preseasonTeamAwards = document.getElementById('preseason-team-awards');
const preseasonPlayerAwards = document.getElementById('preseason-player-awards');
const preseasonAllADLTeams = document.getElementById('preseason-all-adl-teams');
const teamAwards = document.getElementById('team-awards');
const playerAwards = document.getElementById('player-awards');
const allADLTeams = document.getElementById('all-adl-teams');

let isPreseason = false;

toggleButton.addEventListener('click', () => {
  if (!isPreseason) {
    preseasonTeamAwards.style.display = 'block';
    preseasonPlayerAwards.style.display = 'block';
    preseasonAllADLTeams.style.display = 'block';
    teamAwards.style.display = 'none';
    playerAwards.style.display = 'none';
    allADLTeams.style.display = 'none';
    isPreseason = true;
  } else {
    preseasonTeamAwards.style.display = 'none';
    preseasonPlayerAwards.style.display = 'none';
    preseasonAllADLTeams.style.display = 'none';
    teamAwards.style.display = 'block';
    playerAwards.style.display = 'block';
    allADLTeams.style.display = 'block';
    isPreseason = false;
  }
});