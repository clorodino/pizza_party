class Game {
    constructor(){
        this.canvas = null
        this.ctx = null
        this.player = null
        this.ingredients = []
        this.recipe = []
        this.lives = 0
        this.gameOver = false
    }

    // Init the player, obstacules and rewards movement
    start(){
        this.canvas = document.querySelector("#canvas")
        this.ctx = canvas.getContext('2d')
        this.player = new Player(this.canvas, 3)
        this.player.draw()
        console.log(this.player.x)

        // Set Direction
        window.addEventListener("keydown", (event) => {
            if (event.code === "ArrowLeft" && this.player.x > 0) {
                console.log(this.player.x)
                
                this.player.x -= this.player.speed
            } else if (event.code === "ArrowRight" && this.player.x < this.canvas.width - this.player.size) {
                console.log(this.player.x)
                
                this.player.x += this.player.speed
            }
        });
        this.startLoop()
    }
    // Create a loop
    startLoop(){
        const loopCallback = () => {
            //console.log("start loop")
            //this.player.update();
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.player.draw();

            if (this.gameOver === false){
                window.requestAnimationFrame(loopCallback);
            }else{buildGameOver()}
            

        }
        //console.log("finish the loop");
        window.requestAnimationFrame(loopCallback);
    }
    // Check if there are any collision
    checkCollisions(){
        
    }
}

