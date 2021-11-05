# Pizza Party Game

Pizza is possibly the most popular food. We can eat pizza in the whole world, but only the best pizzaiolos can make the best pizza recipes. In this game, you need to add the right ingredients for making the recipe.

## How does it work?
The game screen is a interface where ingredients are dropping from the top. The player has to catch all the ingredients showed in the recipe to complete the level. If he catch a wrong ingredient, he lost a live.

* * *
## MVP
### Technique
HTML5, DOM, CSS, **Canvas** and **Javascript**

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
  * Press arrow keys to move the player to left or rigth.
* Create ingredients$$
  * Each ingredient fall from the top
* Check collision
  * If the ingredient is in the recipe => the recipe box is update
  * If the ingredient is not in the recipe => the player lost 1 live
  * If the player lost all the lives => the game is over
  * If the player collects all the ingredients => go to next level
  * If the player passed the last level => show final winner screen
* * *
