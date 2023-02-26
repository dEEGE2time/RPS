const buttons = document.getElementsByTagName('button');
const mainMenu = document.getElementById('main-menu')
// wait for dom to finish loading before user interaction
document.addEventListener("DOMContentLoaded", function() {
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute('data-type') === 'play') {
                mainMenu.style.display = "none";
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

// functions

function startGame() {
    document.getElementById('game-window').innerHTML = `
    <div class="game-window flex-center">
        <div class="score">score</div>
        <div class="enemy">
            <div class="standby">standby</div>
        </div>
        <div class="player flex-center">
            <div class="standby">standby</div>
            <div class="tile-board">
                <div class="tiles" id="rock">rock</div>
                <div class="tiles id="paper">paper</div>
                <div class="tiles id="scissor">scissor</div>
            </div>
        </div>
    </div>
    `
}

function showRules() {

}

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