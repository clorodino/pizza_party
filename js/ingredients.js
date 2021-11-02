const ingredientsList = [
  {
    name: "tomato",
    image: 'images/tomato.png'
  },
  {
    name: "mozzarella",
    image: '/images/mozzarella.png'
  },
  {
    name: "basil",
    image: '/images/basil.png'
  },
  {
    name: "ham",
    image: '/images/ham.png'
  },
  {
    name: "anchovies",
    image: '/images/anchovies.png'
  },
  {
    name: "capers",
    image: '/images/capers.png'
  },
  {
    name: "olives",
    image: '/images/olives.png'
  },
  {
    name: "mushrooms",
    image: '/images/mushrooms.png'
  },
  {
    name: "pineapple",
    image: '/images/pineapple.png'
  },
  {
    name: "tuna",
    image: '/images/tuna.png'
  },
  {
    name: "mussels",
    image: '/images/mussels.png'
  },
  {
    name: "egg",
    image: '/images/eggs.png'
  },
  {
    name: "avocado",
    image: '/images/avocado.png'
  },
  {
    name: "nachos",
    image: '/images/nachos.png'
  },
  {
    name: "chocolate",
    image: '/images/chocolate.png'
  },
]

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
      this.y += this.speed * 2;
  }

}



