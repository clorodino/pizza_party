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
        this.ingredientSize = 90
        this.margin = 40
        this.currentLevel = 0
    }

    // Init the player, obstacules and rewards movement
    start(){

        //draw hearts
        const createLives = () => {
            const livesDom = document.querySelector("#lives-screen")
            const myImage = new Image();
            myImage.src = '/images/heart.svg';
            myImage.classList.add("heart")
            livesDom.appendChild(myImage)
        }
        //create lives
        for (let i=0; i<this.lives; i++){
            createLives()
        }
        // show the recipe
        this.recipe = level[this.currentLevel]
        this.recipe[0].active = false
        //console.log(level[this.currentLevel][0]);


        //console.log(this.recipe)
        this.recipe.forEach(element => {
            //console.log(element.name);
            ingredientsList.forEach((el) => {
                if (el.name === element.name){
                    element.active = true
                    const recipeDom = document.querySelector("#recipe-screen")
                    const ingImage = new Image();
                    ingImage.src = el.image;
                    ingImage.classList.add("gray-scale")
                    ingImage.id = element.name
                    recipeDom.appendChild(ingImage)
                    
                }     
            })   
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
            if (Math.random() > 0.97) {
                const x = Math.floor(Math.random() * (this.canvas.width - this.ingredientSize))
                const y = this.canvas.height - this.ingredientSize;
                //console.log(this.safeZone(x))
                if (this.safeZone(x)) {
                
                const randomIndex = Math.floor(Math.random() * ingredientsList.length);
                this.ingredients.push(new Ingredient(ingredientsList[randomIndex].name, ingredientsList[randomIndex].image, x, y, this.ctx, 3, this.ingredientSize));
            }
            }

            this.ingredients.forEach((ingredient) => {
                ingredient.move()   
                ingredient.draw()
                
            });

            this.checkCollisions();

              this.ingredients =  this.ingredients.filter((el) => el.y<this.canvas.height)


            //check Level
            ////////////////////////////////////
            // let ingCatched = false
            // for (let el of this.recipe){
            //     console.log("console log de el.active: " + el.name);
            //     if (el.active === false) ingCatched = false
            //     else ingCatched = true
            // }

            //console.log("ingrediente catched is " + ingCatched);

            // if (ingCatched === true) nextLevel()

            ////////////////////////////////////

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
                        //console.log("included")
                        element.active = false
                        element.included = true
                        console.log (element)
                        checkRecipe = true
                        //this.ingredientsCatched.push(ingredient.name)
                        document.getElementById(ingredient.name).classList.remove("gray-scale")
                    }
                    //check if all elements in array are included: true
                    let allItems =  this.recipe.every( e  => e.included === true)
                    if(allItems) buildNextLevel()
                })

                if(!checkRecipe){
                    if(this.lives > 1){
                        this.lives -= 1
                        //console.log(this.lives)

                        const parent = document.querySelector("#lives-screen")
                        const firstChild = document.getElementsByClassName("heart")
                        parent.removeChild(firstChild[0])

                    }else{
                        this.gameOver = true;
                    }
                }

                this.ingredients.splice(indexIngredient, 1)
                
            }
        })
    }

    safeZone(x){
        let isSafe = true
        this.ingredients.forEach((elem) => {
            if (elem.y < (this.margin + this.ingredientSize)){
                if(elem.x > (x - this.margin) && elem.x < (x + this.ingredientSize + this.margin)){
                    isSafe = false
                }
            }
        })
        return isSafe
    }
}

