# Pizza Party Game

Pizza is possibly the most popular food. We can eat pizza in the whole world, but only the best pizzaiolos can make the best pizza recipes. In this game, you need to add the right ingredients for making the recipe.

## How does it work?
The game screen is a interface where ingredients are dropping from the top. The player has to catch all the ingredients showed in the recipe to complete the level. If he catch a wrong ingredient, he lost a live.

* * *
## MVP
### Technique
HTML5, DOM, CSS, **Canvas** and Vanilla **Javascript**

### Game states
* __Start Screen__
  * Title
  * Start Game button
* __Game Screen__
  * Canvas
  * CSS
* __Next Level__
  * You win!
  * Go button
* __Game Over Screen__
  * Try again button
* __The End Screen__
  * You Rock!

### Game
* Create interface
* Create player
* Move player
  * Press arrow keys to move the player around the board.
* Create ingredients
  * Each ingredient will be created once the previous one is taken
* Create knives
  * Define a setInterval where knives will be created every 10 seconds
* Check collision
  * If there is a collision with an ingredient => player gains points and new ingredient is shown
  * If there is a collision with a knive => Game Over => Show Game Over Screen
* * *
