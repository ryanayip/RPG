import { characterData } from "./chardata.js";
import { Character } from "./Character.js";

//Attack button
document.getElementById("attack-button").addEventListener("click", () => {
  //Get the dice roll for each character
  blueKnight.getDiceHTML();
  redKnight.getDiceHTML();
  //Take damage based on total of dice roll
  blueKnight.takeDamage(redKnight.currentDiceScore);
  redKnight.takeDamage(blueKnight.currentDiceScore);
  //Check if either character is dead. If so, end the game
  blueKnight.dead || redKnight.dead ? endGame() : null;
  render();
});

//End game function
function endGame() {
  const endMessage =
    blueKnight.dead && redKnight.dead
      ? "All lives have been lost. Tragic"
      : blueKnight.dead
      ? "The Hero has been slain."
      : "You are victorious!";
  document.body.innerHTML = `<div class="end-game">
  <h2>Game Over</h2>
  <h3>${endMessage}</h3>
</div>`;
}

//Creating two instances of the Character class for blue and red knight

const blueKnight = new Character(characterData.hero);
const redKnight = new Character(characterData.enemy);

//Rendering two characters by setting the innerHTML of the DOM elements to the
//return of the getCharacter() method
function render() {
  document.getElementById("hero").innerHTML = blueKnight.getCharacter();
  document.getElementById("enemy").innerHTML = redKnight.getCharacter();
}

render();
