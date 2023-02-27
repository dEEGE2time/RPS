// Global variables for ease of use
const buttons = document.getElementsByTagName('button');
const mainMenu = document.getElementById('main-menu');
const gameWindow = document.getElementById('game-window');
const logo = document.getElementById('logo');
const tiles = document.getElementsByTagName('img');
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
    for (let tile in tiles) {
        tile.addEventListener("click", function() {
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
 * Generates a random computer move.
 */
function generateComputerMove() {
    let moves = ["rock", "paper", "scissor"];
    let randomMove = Math.floor(Math.random() = moves.length);
    return moves[randomMove];
}

function gameOn(playerMove) {
    let computerMove = generateComputerMove();
    let computerStandby = document.getElementById('computer-standby')
    let playerStandby = document.getElementById('player-standby')
    if (computerMove === "rock" && playerMove === "scissor") {
        computerStandby = rock;
        playerStandby = scissor;
        computerWin();
    } else if (computerMove === "paper" && playerMove === "rock") {
        computerStandby = paper;
        playerStandby = rock;
        computerWin();
    } else if (computerMove === "scissor" && playerMove === "paper") {
        computerStandby = scissor;
        playerStandby = paper;
        computerWin();
    } else if (computerMove === "scissor" && playerMove === "rock") {
        computerStandby = scissor;
        playerStandby = rock;
        playerWin();
    } else if (computerMove === "rock" && playerMove === "paper") {
        computerStandby = rock;
        playerStandby = paper;
        playerWin();
    } else if (computerMove === "paper" && playerMove === "scissor") {
        computerStandby = paper;
        playerStandby = scissor;
        playerWin();
    } else if (computerMove === playerMove) {
        computerStandby = computerMove;
        playerStandby = playerMove;
        alert('Draw!');
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

function playerScore() {

}

function computerScore() {

}