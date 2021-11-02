class Player {
    constructor(canvas, lives){
        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d");
        this.lives = lives
        this.size = 114
        this.x = (this.canvas.width / 2) - (this.size / 2)
        this.y = this.canvas.height - 130
        this.speed = 23
        this.direction = 0
    }
    // check screen borders 
    checkScreen(){
        if(this.x < 0 || this.x > this.canvas.height-57) this.direction = 0
    }
    // check any collisions
    collision(ingredient){
        if (
            this.x + this.size >= ingredient.x &&
            this.y + this.size > ingredient.y &&
            this.y < ingredient.y + ingredient.size &&
            this.x <= ingredient.x + ingredient.size &&
            this.y + this.size > ingredient.y &&
            this.y < ingredient.y + ingredient.size
          ) {
            return true;
            //console.log("colapsa");
          } else {
            return false;
          }
    }
    
    draw(){
        // console.log(this.canvas.height / 2);
        //console.log("player draw")
        this.ctx.fillStyle = "#66D3FA";
        this.ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}