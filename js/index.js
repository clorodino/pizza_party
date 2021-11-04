// Build the splash screen
const buildSplashScreen = () => {
    
    const screen = document.querySelector(".content")
    screen.innerHTML = `
    <div class="screen">
        <div class="splash-screen">PIZZA PARTY</div>
        <button type="button" id="button-start">Start</button>
    </div> `
    const button = document.querySelector("#button-start")
    button.addEventListener("click", () => {
        new Audio('sounds/toggle_002.ogg').play();
        buildGame()
    })
}
// Build the game screen and init the game
const buildGame = () => {
    const bars = document.querySelector("#all-content")
    bars.innerHTML = ` 
        <div id="bar">
            <div id="lives-screen">
             
            </div>
            <div id="recipe-screen">

            </div> 
        </div>
        <canvas id="canvas" height="600" width="800"></canvas> 
    `
    const game = new Game()
    game.start()

}

const buildNextLevel = () => {
    const screen = document.querySelector("#all-content")
    screen.innerHTML = `
    <div class="screen">
        <div class="game-over">You win!</div>
        <button type="button" id="button-next-level">Next Level</button>
    </div> `
    const button = document.querySelector("#button-next-level")
    button.addEventListener("click", () => {
        new Audio('sounds/toggle_002.ogg').play();
        buildGame()
    })
}


// Build de game over screen
const buildGameOver = () => {
    const screen = document.querySelector("#all-content")
    screen.innerHTML = `
    <div class="screen">
        <div class="game-over">GAME OVER</div>
        <button type="button" id="button-try-again">Try Again</button>
    </div> `
    const button = document.querySelector("#button-try-again")
    button.addEventListener("click", () => {
        new Audio('sounds/toggle_002.ogg').play();
        buildGame()
    })
}

//When the page charge init the splash screen
window.onload = function() {
    buildSplashScreen();
};