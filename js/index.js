// Build the splash screen
const buildSplashScreen = () => {
    const screen = document.querySelector(".content");
    screen.innerHTML = `
    <div class="screen">
        <div class="splash-screen">PIZZA PARTY</div>
        <button type="button" id="button-start">Start</button>
    </div> `;
    const button = document.querySelector("#button-start");
    button.addEventListener("click", () => {
        new Audio("sounds/toggle_002.ogg").play();
        buildGame();
    });
};

// Build the game screen and init the game
const buildGame = () => {
    const bars = document.querySelector("#all-content");
    bars.innerHTML = ` 
        <div id="bar">
            <div id="lives-screen"></div>
            <div id="recipe-screen"></div> 
        </div>
        <canvas id="canvas" height="600" width="800"></canvas> 
    `;
    const game = new Game();
    game.start();
};

// Build the next level screen and init the game
const buildNextLevel = () => {
    const screen = document.querySelector("#all-content");
    screen.innerHTML = `
    <div class="screen">
        <div class="game-over">Level ${currentLevel + 1}</div>
        <button type="button" id="button-next-level">Go</button>
    </div> `;
    const button = document.querySelector("#button-next-level");
    button.addEventListener("click", () => {
        new Audio("sounds/toggle_002.ogg").play();
        buildGame();
    });
};

// Build the game over screen
const buildGameOver = () => {
    const screen = document.querySelector("#all-content");
    screen.innerHTML = `
    <div class="screen">
        <div class="game-over">GAME OVER</div>
        <button type="button" id="button-try-again">Try Again</button>
    </div> `;
    const button = document.querySelector("#button-try-again");
    button.addEventListener("click", () => {
        new Audio("sounds/toggle_002.ogg").play();
        currentLevel = 0;
        buildGame();
    });
};

// Build final Screen
const buildYouRock = () => {
    const screen = document.querySelector("#all-content");
    screen.innerHTML = `
    <div class="screen">
        <div class="game-over">YOU ROCK!</div>
    </div> `;
    new Audio("sounds/toggle_002.ogg").play();
};

//When the page charge init the splash screen
window.onload = function () {
    buildSplashScreen();
};
