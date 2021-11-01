class Ingredients {
    constructor(name, image) {
        this.name = name
        this.image = image
        this.x = 0
        this.y = 0
        this.speed = 20
    }
  
    draw() {
        this.ctx.drawImage(this.image)
    }
  
    move() {
        this.x += this.speed * -2;
    }
  }
  
const ingredients = [
  {
    name: "tomato",
    image: '/images/tomato.png'
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
