// Build the splash screen
const buildSplashScreen = () => {
    const screen = document.querySelector(".content")
    screen.innerHTML = `
    <div class="screen">
        <button type="button" id="button-start">Start</button>
    </div> `
    const button = document.querySelector("#button-start")
    button.addEventListener("click", () => {
        buildGame()
    })
}
// Build the game screen and init the game
const buildGame = () => {
    const screen = document.querySelector(".content")
    screen.innerHTML = `
    <canvas id="canvas" height="600" width="800"></canvas> `
    const game = new Game()
    game.start()

}
// Build de game over screen
const buildGameOver = () => {
    const screen = document.querySelector(".content")
    screen.innerHTML = `
    <div class="screen">
        <button type="button" id="button-try-again">try again</button>
    </div> `
    const button = document.querySelector("#button-try-again")
    button.addEventListener("click", () => {
        buildGame()
    })
}

//When the page charge init the splash screen
window.onload = function() {
    buildSplashScreen();
};