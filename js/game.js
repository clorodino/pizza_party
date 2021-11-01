class Game {
    constructor(){
        this.canvas = null
        this.ctx = null
        this.player = null
        this.ingredients = []
        this.recipe = []
        this.lives = 0
    }

    // Init the player, obstacules and rewards movement
    start(){
        this.canvas = document.querySelector("#canvas")
        this.ctx = canvas.getContext('2d')
        this.player = new Player(this.canvas, 3)
        this.player.draw()

        // Set Direction
        document.body.addEventListener("keydown", (event) => {
            if (event.code === "ArrowLeft") {
                console.log("LEFT")
                this.player.setDirection("left");
            } else if (event.code === "ArrowRight") {
                console.log("RIGHT")
                this.player.setDirection("right");
            }
          });
        this.startLoop()
    }
    // Create a loop
    startLoop(){
        const loopCallback = () => {
            console.log("start loop")
            this.player.update();
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.player.draw();

        }
        console.log("finish the loop");
        window.requestAnimationFrame(loopCallback);
    }
    // Check if there are any collision
    checkCollisions(){
        
    }
}

