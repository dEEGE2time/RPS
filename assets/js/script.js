// Global variables for ease of use
const buttons = document.getElementsByTagName('button');
const buttonDiv = document.getElementById('button-div');
const mainMenu = document.getElementById('main-menu');
const gameWindow = document.getElementById('game-window');
const emptyWindow = document.getElementById('empty-window');
const footerBox = document.getElementById('footer-box');
const logo = document.getElementById('logo');
const tiles = document.getElementsByClassName('image');

let pScore = 0;
let cScore = 0;

// Wait for dom to finish loading before user interaction.
// Event listeners for clicks on buttons in main menu, also in active game.
document.addEventListener("DOMContentLoaded", function() {
    gameWindow.style.display = "none";
    emptyWindow.style.display = "none";
    for (let button of buttons) { // Keep track of player choice main menu
        button.addEventListener("click", function() {
            if (this.getAttribute('data-type') === 'play') {
                mainMenu.style.display = "none";
                logo.style.display = "none";
                startGame();
            } else if (this.getAttribute('data-type') === 'rules') {
                mainMenu.style.display = "none";
                showRules();
            } else {
                mainMenu.style.display = "none";
                showCredits();
            }
        });
    }
    for (let i = 0; i < tiles.length; i++) { // Keep track of player choice in-game
        tiles[i].addEventListener("click", function() {
            let playerMove = this.getAttribute('data-type');
            gameOn(playerMove);
        });
    }
});

// FUNCTIONS

/**
 * Run the game, display game for the user.
 * Hide what's needed.
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

    // Back button
    buttonDiv.style.display = "block";
    buttonDiv.innerHTML = `
    <button onclick="returnMainMenu()" class="cards" style="margin-bottom:10px">QUIT</button>
    `;

    // Hide footer in-game
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

/**
 * Display what both players picked.
 * Rules for the game.
 */
function gameOn(playerMove) {
    let computerMove = generateComputerMove();
    let computerStandby = document.getElementById('computer-standby');
    let playerStandby = document.getElementById('player-standby');
    // Computer wins
    if (computerMove === "rock" && playerMove === "scissor") {
        computerStandby.src = "assets/images/rock.webp";
        playerStandby.src = "assets/images/scissor.webp";
        computerScore();
    } else if (computerMove === "paper" && playerMove === "rock") {
        computerStandby.src = "assets/images/paper.webp";
        playerStandby.src = "assets/images/rock.webp";
        computerScore();
    } else if (computerMove === "scissor" && playerMove === "paper") {
        computerStandby.src = "assets/images/scissor.webp";
        playerStandby.src = "assets/images/paper.webp";
        computerScore();
    // Player wins
    } else if (computerMove === "scissor" && playerMove === "rock") {
        computerStandby.src = "assets/images/scissor.webp";
        playerStandby.src = "assets/images/rock.webp";
        playerScore();
    } else if (computerMove === "rock" && playerMove === "paper") {
        computerStandby.src = "assets/images/rock.webp";
        playerStandby.src = "assets/images/paper.webp";
        playerScore();
    } else if (computerMove === "paper" && playerMove === "scissor") {
        computerStandby.src = "assets/images/paper.webp";
        playerStandby.src = "assets/images/scissor.webp";
        playerScore();
    // Draw
    } else if (computerMove === playerMove) {
        computerStandby.src = `assets/images/${computerMove}.webp`;
        playerStandby.src = `assets/images/${playerMove}.webp`;
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
        <a href="https://www.flaticon.com/free-icons/pixel" title="pixel icons" target="_blank">Pixel icons created by Dooder - Flaticon</a>
        <a href="https://fonts.google.com/specimen/VT323" title="vt323 font" target="_blank">VT323 Font - Google Fonts</a>
        <button onclick="returnMainMenu()" class="cards" style="margin-bottom:10px">BACK</button>
    </div>
    `;
}

/**
 * Reload, to return to main menu.
 */
function returnMainMenu() {
    location.reload(); // location.reload(); has been used to ensure the players starts a NEW game.
}

/**
 * Player won
 * Display final score with win screen
 */
function playerWin() {
    logo.style.display = "block";
    
    let newWindow = gameWindow.children; // Get all child elements inside game-window and hide them.
    for(let i = 0; i < newWindow.length; i++) {
        newWindow[i].style.display = "none";
    }
    gameWindow.innerHTML = `
    <h2>YOU WIN</h2>
    <h2>Score: ${pScore} - ${cScore}</h2>
    `; // New content in game-window
}

/**
 * Computer won
 * Display final score with loss screen
 */
function computerWin() {
    logo.style.display = "block";
    
    let newWindow = gameWindow.children; // Get all child elements inside game-window and hide them.
    for(let i = 0; i < newWindow.length; i++) {
        newWindow[i].style.display = "none";
    }
    gameWindow.innerHTML = ` 
    <h2>YOU LOSE</h2>
    <h2>Score: ${pScore} - ${cScore}</h2>
    `; // New content in game-window
}

/**
 * Grabs the player score and increment by 1.
 * Display string "WIN".
 * Runs playerWin() if player score reaches 5.
 */
function playerScore() {
    pScore++;
    document.getElementById('player-score').innerText = pScore;

    document.getElementById('round-result').innerHTML = '<span style="font-size:40px; font-weight:lighter; color:green">WIN</span>';

    if (pScore === 5) {
        playerWin();
    }
}

/**
 * Grabs the computer score and increment by 1.
 * Display string "LOSE".
 * Runs computerWin() if computer score reaches 5.
 */
function computerScore() {
    cScore++;
    document.getElementById('computer-score').innerText = cScore;

    document.getElementById('round-result').innerHTML = '<span style="font-size:40px; font-weight:lighter; color:red">LOSE</span>';

    if (cScore == 5) {
        computerWin();
    }
}

/**
 * Display Draw string
 * No score added, game continues.
 */
function drawScore() {
    document.getElementById('round-result').innerHTML = '<span style="font-size:40px; font-weight:lighter">DRAW</span>';
}