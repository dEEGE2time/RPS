// Global variables for ease of use
const buttons = document.getElementsByTagName('button');
const mainMenu = document.getElementById('main-menu')
const logo = document.getElementById('logo')

// Wait for dom to finish loading before user interaction.
document.addEventListener("DOMContentLoaded", function() {
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
    document.getElementById('game-window').innerHTML = `
    <div class="game-window flex-center">
        <div class="score">0 : 0</div>
        <div class="enemy">
            <div class="standby">standby</div>
        </div>
        <div class="player flex-center">
            <div class="standby">standby</div>
            <div class="tile-board">
                <div class="tiles"><img src="assets/images/fist.webp" alt="rock" id="rock" class="image"></div>
                <div class="tiles"><img src="assets/images/hand.webp" alt="paper" id="paper" class="image"></div>
                <div class="tiles"><img src="assets/images/victory.webp" alt="scissor" id="scissor" class="image"></div>
            </div>
        </div>
    </div>
    `
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