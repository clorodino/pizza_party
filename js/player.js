class Player {
    constructor(canvas, lives){
        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d");
        this.lives = lives
        this.x = this.canvas.height / 2
        this.y = this.canvas.height - 130
        this.speed = 10
        this.direction = 0
    }

    update(){
        console.log("player update");
        this.x = this.x + this.direction * this.speed;
    }

    setDirection(direction){
        if (direction === "left") this.direction = -50
        else if (direction === "right") this.direction = 50
    }
    // check screen borders 
    checkScreen(){

    }
    // check any collisions
    collision(){

    }
    
    draw(){
        // console.log(this.canvas.height / 2);
        console.log("player draw")
        this.ctx.fillStyle = "#66D3FA";
        this.ctx.fillRect(this.x + 57, this.y, 114, 114);
    }
}