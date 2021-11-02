class Game {
    constructor(){
        this.canvas = null
        this.ctx = null
        this.player = null
        this.ingredients = []
        this.recipe = []
        this.lives = 3
        this.gameOver = false
    }

    // Init the player, obstacules and rewards movement
    start(){
        this.canvas = document.querySelector("#canvas")
        this.ctx = canvas.getContext('2d')
        this.player = new Player(this.canvas, 3)
        this.player.draw()
        //console.log(this.player.x)

        window.addEventListener("keydown", (event) => {
            if (event.code === "ArrowLeft" && this.player.x > 0) {
                //console.log(this.player.x)
                
                this.player.x -= this.player.speed
            } else if (event.code === "ArrowRight" && this.player.x < this.canvas.width - this.player.size) {
                //console.log(this.player.x)
                
                this.player.x += this.player.speed
            }
        });
        this.startLoop()
    }
    // Create a loop
    startLoop(){
        const loopCallback = () => {

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.player.draw();
            

            // create falling ingredients
            if (Math.random() > 0.99) {
                //const x = Math.random() * this.canvas.width;
                const x = Math.floor(Math.random() * this.canvas.width)
                const y = this.canvas.height - 20;
                const randomIndex = Math.floor(Math.random() * ingredientsList.length);
                this.ingredients.push(new Ingredient(ingredientsList[randomIndex].name, ingredientsList[randomIndex].image, x, y, this.ctx, 2));
            }

            this.ingredients.forEach((ingredient) => {
                ingredient.draw()
                ingredient.move();
              });

            this.checkCollisions();

            if (this.gameOver === false){
                window.requestAnimationFrame(loopCallback);
            }else{buildGameOver()}
        }
        //console.log("finish the loop");
        window.requestAnimationFrame(loopCallback);
    }
    // Check if there are any collision
    checkCollisions(){
        this.ingredients.forEach((ingredient, indexIngredient) => {
            if (this.player.collision(ingredient)) {
                // if collision we need to check if the ingredient is correct
                console.log(ingredient.name)
                

                // if ingredient is not correct
                if (this.lives > 0){
                    this.ingredients.splice(indexIngredient, 1)
                    this.lives -= 1
                    console.log(this.lives)
                }else{
                    this.gameOver = true;
                }
            }
        })
    }
}

