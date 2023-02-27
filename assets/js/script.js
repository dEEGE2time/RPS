// Global variables for ease of use
const buttons = document.getElementsByTagName('button');
const mainMenu = document.getElementById('main-menu');
const gameWindow = document.getElementById('game-window');
const logo = document.getElementById('logo');

// Wait for dom to finish loading before user interaction.
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
 * If user needs to read the rules, displays the rules.
 */
function showRules() {

}
/**
 * Displays credits for content used.
 */
function showCredits() {

}

function playerMove() {

}

function computerMove() {

}

function playerScore() {

}

function computerScore() {

}