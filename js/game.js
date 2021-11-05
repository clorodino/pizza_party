let currentLevel = 0

class Game {
    constructor(){
        this.canvas = null
        this.ctx = null
        this.player = null
        this.ingredients = []
        this.recipe = []
        this.lives = 5
        this.gameOver = false
        this.nextLevel = false
        this.ingredientSize = 90
        this.margin = 100
        this.music = new Audio('./sounds/2018-10-06_-_Silly_Chicken_-_David_Fesliyan.mp3')
        this.speed = currentLevel + 2.5
    }

    // Init the player, obstacules and rewards movement
    start(){

        // init the music
        this.music.play();

        // create and draw lives
        createLives(this.lives)

        // show the recipe
        this.recipe = level[currentLevel]

        this.recipe.forEach(element => {
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
        
        // create the player
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
    // create a loop
    startLoop(){
        const loopCallback = () => {

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.player.draw();
            
            // create falling ingredients
            if (Math.random() > 0.97) {
                const x = Math.floor(Math.random() * (this.canvas.width - this.ingredientSize))
                const y = this.canvas.height - this.ingredientSize;
                if (this.safeZone(x)) {
                    const randomIndex = Math.floor(Math.random() * ingredientsList.length);
                    this.ingredients.push(new Ingredient(ingredientsList[randomIndex].name, ingredientsList[randomIndex].image, x, y, this.ctx, this.speed, this.ingredientSize));
                }
            }

            this.ingredients.forEach((ingredient) => {
                ingredient.move()   
                ingredient.draw()
            });

            // check collisions
            this.checkCollisions();

            this.ingredients =  this.ingredients.filter((el) => el.y<this.canvas.height)

            // check if level passed
            if(this.nextLevel === true ){
                this.music.pause();
                this.music.currentTime = 0
                new Audio('sounds/win sound 1-2.wav').play()
                
                level[currentLevel].forEach((el) =>{
                    el.included = false
                })
                currentLevel ++
                console.log("entra")
                if (level.length === currentLevel){ // check if there are more levels
                    buildYouRock() 
                }else{
                    buildNextLevel()
                }

                
            }else if (this.gameOver === false){ 
                window.requestAnimationFrame(loopCallback)
            }else{
                this.music.pause();
                this.music.currentTime = 0
                new Audio('./sounds/game_over.mp3').play()
                level[currentLevel].forEach((el) =>{
                    el.included = false
                })
                buildGameOver()
            }
        }
        window.requestAnimationFrame(loopCallback)
    }
    // Check if there are any collision
    checkCollisions(){
        
        this.ingredients.forEach((ingredient, indexIngredient) => {      
            if (this.player.collision(ingredient)) {
                let checkRecipe = false
                this.recipe.forEach(element => {
                    if(element.name === ingredient.name){
                        element.active = false
                        element.included = true
                        checkRecipe = true
                        document.getElementById(ingredient.name).classList.remove("gray-scale")
                        new Audio('sounds/select_006.ogg').play();
                    }
                    //check if all elements in array are included: true
                    let allItems =  this.recipe.every( e  => e.included === true)
                    if(allItems) {this.nextLevel = true}
                })

                if(!checkRecipe){
                    if(this.lives > 1){
                        this.lives -= 1
                        new Audio('sounds/error_006.ogg').play();
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


const createLives = (numLives) => {
    for (let i=0; i<numLives; i++){
        const livesDom = document.querySelector("#lives-screen")
        const myImage = new Image();
        myImage.src = './images/heart.svg';
        myImage.classList.add("heart")
        livesDom.appendChild(myImage)
    }
}

