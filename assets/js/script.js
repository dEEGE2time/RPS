// Global variables for ease of use
const buttons = document.getElementsByTagName('button');
const mainMenu = document.getElementById('main-menu');
const gameWindow = document.getElementById('game-window');
const logo = document.getElementById('logo');
const tiles = document.getElementsByClassName('image');
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissor = document.getElementById('scissor')

// Wait for dom to finish loading before user interaction.
// Event listeners for clicks on buttons in main menu, also in active game.
document.addEventListener("DOMContentLoaded", function() {
    gameWindow.style.display = "none";
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
    gameWindow.style.width = "1024px";
    gameWindow.style.border = "5px black dashed";
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

}
/**
 * Displays credits for content used.
 */
function showCredits() {

}

function playerWin() {
}

function computerWin() {

}

/**
 * Grabs the player score and adds 1.
 * Display string "WIN".
 * Runs playerWin() if player score reaches 5.
 */
function playerScore() {
    let playerScoreCalc = parseInt(document.getElementById('player-score').innerText);
    document.getElementById('player-score').innerText = ++playerScoreCalc;

    document.getElementById('round-result').innerHTML = "<style: color:green;>" + "WIN" + "</style>";

    if (playerScoreCalc == 5) {
        playerWin();
    }
}

/**
 * Grabs the computer score and adds 1.
 * Display string "LOSE".
 * Runs computerWin() if computer score reaches 5.
 */
function computerScore() {
    let computerScoreCalc = parseInt(document.getElementById('computer-score').innerText);
    document.getElementById('computer-score').innerText = ++computerScoreCalc;

    document.getElementById('round-result').innerHTML = "<style: color:red;>" + "LOSE" + "</style>";

    if (computerScoreCalc == 5) {
        computerWin();
    }
}

function drawScore() {
    document.getElementById('round-result').innerHTML = "DRAW";
}