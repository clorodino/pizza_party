class Ingredients {
    constructor(name, image) {
        this.name = name
        this.image = image
        this.x = 0
        this.y = 0
        this.direction =  this.direction
    }
  
    draw() {
        this.ctx.drawImage(this.image)
    }
  
    move() {
      //this.x += this.speed * -2;
    }
  }

// const ingredients = [
//     {
//     name: "tomato",
//     img: URL("https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Feasyappicon.com%2Fimage%2Ffavicon%2Fms-icon-310x310.png"),
//     color: "black"
//     },
//     {name: "pineapple"},
//     {name: "mozzarella"},
//     {name: "basil"},
//     {name: "ham"}
//