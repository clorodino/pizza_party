class Game {
    constructor(){
        this.canvas = null
        this.ctx = null
        this.player = null
        this.ingredients = []
        this.recipe = []
        this.ingredientsCatched = []
        this.lives = 3
        this.gameOver = false
    }

    // Init the player, obstacules and rewards movement
    start(){
        // show the recipe
        this.recipe = level2
        //console.log(this.recipe)
        this.recipe.forEach(element => {
            console.log(element.name);
        })
        
        this.canvas = document.querySelector("#canvas")
        this.ctx = canvas.getContext('2d')
        this.player = new Player(this.canvas)
        this.player.draw()

        window.addEventListener("keydown", (event) => {
            if (event.code === "ArrowLeft" && this.player.x > 0) {
                this.player.x -= this.player.speed
            } else if (event.code === "ArrowRight" && this.player.x < this.canvas.width - this.player.size) {              
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
                const x = Math.floor(Math.random() * this.canvas.width)
                const y = this.canvas.height - 20;
                const randomIndex = Math.floor(Math.random() * ingredientsList.length);
                this.ingredients.push(new Ingredient(ingredientsList[randomIndex].name, ingredientsList[randomIndex].image, x, y, this.ctx, 3));
            }

            this.ingredients.forEach((ingredient) => {
                ingredient.move()   
                ingredient.draw()
                
              });

            this.checkCollisions();

              this.ingredients =  this.ingredients.filter((el) => el.y<this.canvas.height)

            if (this.gameOver === false){
                window.requestAnimationFrame(loopCallback);
            }else{buildGameOver()}
        }
        //console.log("finish the loop");
        window.requestAnimationFrame(loopCallback);
    }
    // Check if there are any collision
    checkCollisions(){
        //  console.log(this.ingredients);
        this.ingredients.forEach((ingredient, indexIngredient) => {
                
            if (this.player.collision(ingredient)) {

                let checkRecipe = false

                this.recipe.forEach(element => {
                    if(element.name === ingredient.name){
                        console.log("included")
                        element.active = true
                        checkRecipe = true
                    }
                })

                if(!checkRecipe){
                    if(this.lives > 1){
                        this.lives -= 1
                        console.log(this.lives)
                        
                    }else{
                        this.gameOver = true;
                    }
                }

                this.ingredients.splice(indexIngredient, 1)
                
            }
        })
    }
}

