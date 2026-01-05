// Containers
const walletDisplay = document.getElementById('walletDisplay');
const typeChoiceBox = document.getElementById('typeChoice');
const colorChoiceBox = document.getElementById('colorChoice');
const numberChoiceBox = document.getElementById('numberChoice');
const resultBox = document.getElementById('resultBox');
const resultText = document.getElementById('resultText');
const gameOverText = document.getElementById('gameOverText');

// Buttons
const typeColor = document.getElementById('color');
const typeNumber = document.getElementById('number');
const redBtn = document.getElementById('redChoice');
const blackBtn = document.getElementById('blackChoice');
const playCol = document.getElementById('playCol');
const playNum = document.getElementById('playNum');
const playAgainBtn = document.getElementById('playAgain');

//---------------------------------------------------------------------------------------------//

// Wallet
let wallet = 50;

// Data
const rouletteTable = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
const black = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35];
const red = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36];

// State
let chosenColor = null;                 // No selected color at start
resultText.style.color = 'black';       // Default result text color

//---------------------------------------------------------------------------------------------//

// Functions
function updateWallet() {       // Update wallet display
    walletDisplay.textContent = `Wallet: $${wallet}`;
}

function spinRoulette() {       // Simulate a roulette spin
    const number = rouletteTable[Math.floor(Math.random() * rouletteTable.length)];
    const color = black.includes(number) ? 'black' : 'red';
    return { number, color };
}

function resetUI() {            // Reset UI to initial state
    typeChoiceBox.style.display = 'block';
    colorChoiceBox.style.display = 'none';
    numberChoiceBox.style.display = 'none';
    resultBox.style.display = 'none';
    playAgainBtn.style.display = 'inline-block';
    gameOverText.style.display = 'none';
}

function checkGameOver() {      // Check if wallet is empty
    if (wallet <= 0) {
        playAgainBtn.style.display = 'none';
        gameOverText.style.display = 'block';
    }
}

function canPlaceBet(bet) {     // Check if bet is valid
    if (bet > wallet) {
        resultText.textContent = "You don't have enough money in your wallet for that bet.";
        resultBox.style.display = 'block';
        playAgainBtn.style.display = 'none';
        gameOverText.style.display = 'none';
        return false;
    }
    return true;
}

//---------------------------------------------------------------------------------------------//

// Mode selection
typeColor.onclick = () => {     // Gamble on color
    typeChoiceBox.style.display = 'none';       // Hide type choice box     (none = hide)
    colorChoiceBox.style.display = 'block';     // Show color choice box    (block = show)
};

typeNumber.onclick = () => {    // Gamble on number
    typeChoiceBox.style.display = 'none';
    numberChoiceBox.style.display = 'block';
};

// Color choice
redBtn.onclick = () => chosenColor = 'red';
blackBtn.onclick = () => chosenColor = 'black';

//---------------------------------------------------------------------------------------------//

// Play color game
playCol.onclick = () => {
    const bet = Number(document.getElementById('colorBetAmount').value);
    if (!canPlaceBet(bet)) return;
    const spin = spinRoulette();

    let message;
    if (spin.color === chosenColor) {
        wallet += bet;      // Add winnings
        resultText.style.color = 'green';
        message = `You won! The ball landed on ${spin.number} ${spin.color}. You won $${bet * 2}.`;
    } else {
        wallet -= bet;          // Remove initial bet
        resultText.style.color = 'red';
        message = `You lost! The ball landed on ${spin.number} ${spin.color}. You lost $${bet}.`;
    }

    updateWallet();
    playAgainBtn.style.display = '';
    checkGameOver();
    
    colorChoiceBox.style.display = 'none';
    resultBox.style.display = 'block';
    resultText.textContent = message;
};

// Play number game
playNum.onclick = () => {
    const bet = Number(document.getElementById('numberBetAmount').value);
    if (!canPlaceBet(bet)) return;
    const chosenNumber = Number(document.getElementById('numberPick').value);
    const spin = spinRoulette();

    let message;
    if (spin.number === chosenNumber) {
        wallet += bet * 35;     // Add winnings
        resultText.style.color = 'green';
        message = `JACKPOT! It landed on ${spin.number} ${spin.color}. You won $${bet * 35}!`;
    } else {
        wallet -= bet;          // Remove initial bet
        resultText.style.color = 'red';
        message = `It landed on ${spin.number} ${spin.color}. You lost $${bet}.`;
    }

    updateWallet();
    playAgainBtn.style.display = '';
    checkGameOver();

    numberChoiceBox.style.display = 'none';
    resultBox.style.display = 'block';
    resultText.textContent = message;
};

// Play again
playAgainBtn.onclick = () => {
    resetUI();
};

// Initial setup
updateWallet();
