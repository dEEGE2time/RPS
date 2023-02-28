// Global variables for ease of use
const buttons = document.getElementsByTagName('button');
const buttonDiv = document.getElementById('button-div');
const mainMenu = document.getElementById('main-menu');
const gameWindow = document.getElementById('game-window');
const emptyWindow = document.getElementById('empty-window');
const footerBox = document.getElementById('footer-box');
const logo = document.getElementById('logo');
const tiles = document.getElementsByClassName('image');
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissor = document.getElementById('scissor')

// Wait for dom to finish loading before user interaction.
// Event listeners for clicks on buttons in main menu, also in active game.
document.addEventListener("DOMContentLoaded", function() {
    gameWindow.style.display = "none";
    emptyWindow.style.display = "none";
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute('data-type') === 'play') {
                mainMenu.style.display = "none";
                logo.style.display = "none"
                startGame();
            } else if (this.getAttribute('data-type') === 'rules') {
                mainMenu.style.display = "none";
                showRules();
            } else {
                mainMenu.style.display = "none";
                showCredits();
            }
        })
    }
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener("click", function() {
            let playerMove = this.getAttribute('data-type');
            gameOn(playerMove);
        })
    }
})
// FUNCTIONS
/**
 * Run the game, display game for the user.
 */
function startGame() {
    // Styling for the game-window. Reason: "gameWindow.style.display = "none";" removed all styling when i bring it back.
    gameWindow.style.display = "flex";
    gameWindow.style.flexWrap = "wrap";
    gameWindow.style.flexDirection = "column";
    gameWindow.style.alignItems = "center";

    gameWindow.style.marginLeft = "auto";
    gameWindow.style.marginRight = "auto";
    gameWindow.style.marginTop = "128px";
    gameWindow.style.maxWidth = "1024px";
    gameWindow.style.border = "5px black dashed";

    buttonDiv.style.display = "block";
    buttonDiv.innerHTML = `
    <button onclick="returnMainMenu()" class="cards" style="margin-bottom:10px">QUIT</button>
    `;

    footerBox.style.display = "none";
}
/**
 * Generates a random move for the computer between "rock", "paper", "scissor".
 */
function generateComputerMove() {
    let moves = ["rock", "paper", "scissor"];
    let randomMove = Math.floor(Math.random() * moves.length);
    return moves[randomMove];
}

function gameOn(playerMove) {
    let computerMove = generateComputerMove();
    let computerStandby = document.getElementById('computer-standby')
    let playerStandby = document.getElementById('player-standby')
    if (computerMove === "rock" && playerMove === "scissor") {
        computerStandby.src = "assets/images/fist.webp";
        playerStandby.src = "assets/images/victory.webp";
        computerScore();
    } else if (computerMove === "paper" && playerMove === "rock") {
        computerStandby.src = "assets/images/hand.webp";
        playerStandby.src = "assets/images/fist.webp";
        computerScore();
    } else if (computerMove === "scissor" && playerMove === "paper") {
        computerStandby.src = "assets/images/victory.webp";
        playerStandby.src = "assets/images/hand.webp";
        computerScore();
    } else if (computerMove === "scissor" && playerMove === "rock") {
        computerStandby.src = "assets/images/victory.webp";
        playerStandby.src = "assets/images/fist.webp";
        playerScore();
    } else if (computerMove === "rock" && playerMove === "paper") {
        computerStandby.src = "assets/images/fist.webp";
        playerStandby.src = "assets/images/hand.webp";
        playerScore();
    } else if (computerMove === "paper" && playerMove === "scissor") {
        computerStandby.src = "assets/images/hand.webp";
        playerStandby.src = "assets/images/victory.webp";
        playerScore();
    } else if (computerMove === playerMove) {
        computerStandby.src = computerMove;
        playerStandby.src = playerMove;
        drawScore();
    }
}

/**
 * If user needs to read the rules, displays the rules.
 */
function showRules() {
    logo.style.display = "block";
    emptyWindow.style.display = "block";
    emptyWindow.innerHTML = `
    <div class="flex-center">
        <h1>Rules</h1>
        <br>
        <p>This is the rules</p>
        <button onclick="returnMainMenu()" class="cards" style="margin-bottom:10px">BACK</button>
    </div>
    `;
}
/**
 * Displays credits for content used.
 */
function showCredits() {
    logo.style.display = "block";
    emptyWindow.style.display = "block";
    emptyWindow.innerHTML = `
    <div class="flex-center">
        <h1>Credits</h1>
        <br>
        <p>These should be credited.</p>
        <button onclick="returnMainMenu()" class="cards" style="margin-bottom:10px">BACK</button>
    </div>
    `;
}

function returnMainMenu() {
    logo.style.display = "block";

    mainMenu.style.display = "flex";
    mainMenu.style.margin = "0 auto";
    mainMenu.style.padding = "50px";
    mainMenu.style.alignItems = "center";
    mainMenu.style.flexDirection = "column";
    mainMenu.style.width = "50%";

    emptyWindow.style.display = "none";
    gameWindow.style.display = "none";
    buttonDiv.style.display = "none";
    footerBox.style.display = "block";
}

function playerWin() {
    logo.style.display = "block";
    
    let newWindow = gameWindow.children;
    for(i = 0; i < newWindow.length; i++) {
        newWindow[i].style.display = "none";
    }
    gameWindow.innerHTML = `
    <h2>YOU WIN</h2>
    <h2>Score: ${playerScore.textContent} : ${computerScore.textContent}</h2>
    `;
}

function computerWin() {
    logo.style.display = "block";
    
    let newWindow = gameWindow.children;
    for(i = 0; i < newWindow.length; i++) {
        newWindow[i].style.display = "none";
    }
    gameWindow.innerHTML = `
    <h2>YOU LOSE</h2>
    <h2>Score: ${playerScore.textContent} : ${computerScore.textContent}</h2>
    `;
}

/**
 * Grabs the player score and increment by 1.
 * Display string "WIN".
 * Runs playerWin() if player score reaches 5.
 */
function playerScore() {
    let playerScoreCalc = parseInt(document.getElementById('player-score').innerText);
    document.getElementById('player-score').innerText = ++playerScoreCalc;

    document.getElementById('round-result').innerHTML = '<span style="font-size:40px; font-weight:lighter; color:green">WIN</span>';

    if (playerScoreCalc === 5) {
        console.log('score calc is now 5')
        playerWin();
    }
}
/**
 * Grabs the computer score and increment by 1.
 * Display string "LOSE".
 * Runs computerWin() if computer score reaches 5.
 */
function computerScore() {
    let computerScoreCalc = parseInt(document.getElementById('computer-score').innerText);
    document.getElementById('computer-score').innerText = ++computerScoreCalc;

    document.getElementById('round-result').innerHTML = '<span style="font-weight:lighter; color:red">LOSE</span>';

    if (computerScoreCalc == 5) {
        computerWin();
    }
}

function drawScore() {
    document.getElementById('round-result').innerHTML = '<span style="font-weight:lighter">DRAW</span>';
}