// Function to show a specific section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
        selectedSection.classList.add('active');
    }
}

// Function to display the Rock-Paper-Scissors game
function showGame() {
    const gameSection = document.getElementById('game');
    if (gameSection) {
        gameSection.style.display = 'block'; // Show the game section
    }
}

// Function to play the Rock-Paper-Scissors game
function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    // Determine the result of the game
    if (userChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    // Display the result
    document.getElementById('result').innerText = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
}
