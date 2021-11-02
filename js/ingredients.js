

class Ingredient {
  constructor(name, image, x, y, ctx, speed) {
      this.name = name
      this.image = image
      this.x = x
      this.y = -60
      this.size = 60;
      this.ctx = ctx;
      this.speed = speed
  }

  draw() {
      const imgIngredient = new Image()
      imgIngredient.src = this.image
      this.ctx.drawImage(imgIngredient, this.x, this.y, this.size, this.size)

  }

  move() {
      this.y += this.speed * 1.5;
  }

}



