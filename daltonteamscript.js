// Tab Navigation Functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active classes
            tabLinks.forEach(item => item.classList.remove('active'));
            tabContents.forEach(item => item.classList.remove('active'));

            // Add active classes to clicked tab and corresponding content
            link.classList.add('active');
            document.getElementById(link.getAttribute('data-tab')).classList.add('active');
        });
    });
});

// Function to open the edit modal
function editTradingBlock() {
    document.getElementById('edit-modal').style.display = 'flex';
}

// Function to close the edit modal
function closeModal() {
    document.getElementById('edit-modal').style.display = 'none';
}

// Function to save changes from the modal
function saveChanges() {
    const onTheBlock = document.getElementById('on-the-block-input').value.trim();
    const untouchable = document.getElementById('untouchable-input').value.trim();
    const teamNeeds = document.getElementById('team-needs-input').value.trim();
    const interestedIn = document.getElementById('interested-in-input').value.trim();
    const teamNote = document.getElementById('team-note-input').value.trim();

    document.getElementById('on-the-block').innerText = onTheBlock || 'None set';
    document.getElementById('untouchable').innerText = untouchable || 'None set';
    document.getElementById('team-needs').innerText = teamNeeds || 'None set';
    document.getElementById('interested-in').innerText = interestedIn || 'None of your players';
    document.getElementById('team-note').innerText = teamNote || 'No note entered';

    closeModal();
}

// Function to simulate proposing a trade
function proposeTrade() {
    alert("Trade proposal feature is not implemented yet.");
}

document.querySelectorAll('.bid-button').forEach(button => {
    button.addEventListener('click', function() {
        const bidInput = this.previousElementSibling;
        const currentBidElem = this.closest('.auction-card').querySelector('.current-bid');

        const newBid = bidInput.value.trim();
        if (newBid) {
            currentBidElem.textContent = newBid;
            bidInput.value = '';
            alert("Your bid has been placed: " + newBid);
        } else {
            alert("Please enter a bid.");
        }
    });
});

document.querySelectorAll('.bid-button').forEach(button => {
    button.addEventListener('click', function() {
        const auctionCard = this.closest('.auction-card');
        const teamInput = auctionCard.querySelector('.team-input').value.trim();
        const bidInput = auctionCard.querySelector('.bid-input').value.trim();
        const bidList = auctionCard.querySelector('.bid-list');

        if (teamInput && bidInput) {
            const currentBidElem = auctionCard.querySelector('.current-bid');

            // Update the current bid
            currentBidElem.textContent = bidInput;

            // Add the new bid to the bid history
            const newBid = document.createElement('li');
            newBid.textContent = `${teamInput}: ${bidInput}`;
            bidList.appendChild(newBid);

            // Clear the input fields
            auctionCard.querySelector('.team-input').value = '';
            auctionCard.querySelector('.bid-input').value = '';

            alert(`Your bid has been placed: ${teamInput} bid ${bidInput}`);
        } else {
            alert("Please enter both your team name and bid.");
        }
    });
});

// Timer functionality (Example: updating every second)
const countdownElems = document.querySelectorAll('.countdown');
countdownElems.forEach(countdown => {
    let timeLeft = 86400; // 24 hours in seconds for example
    const timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            countdown.textContent = "Auction Ended";
        } else {
            timeLeft--;
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            countdown.textContent = `${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
});

