import { characterData } from "./chardata.js";
import { Character } from "./Character.js";

//Attack button
document.getElementById("attack-button").addEventListener("click", () => {
  //Get the dice roll for each character
  heroChar.getDiceHTML();
  skullChar.getDiceHTML();
  //Take damage based on total of dice roll
  heroChar.takeDamage(skullChar.currentDiceScore);
  skullChar.takeDamage(heroChar.currentDiceScore);
  //Check if either character is dead. If so, end the game
  heroChar.dead || skullChar.dead ? endGame() : null;
  render();
});

//End game function
function endGame() {
  const endMessage =
    heroChar.dead && skullChar.dead
      ? "All lives have been lost. Tragic"
      : heroChar.dead
      ? "The Hero has been slain."
      : "You are victorious!";
  //end message
  //   document.body.innerHTML = `<div class="end-game">
  //   <h2>Game Over</h2>
  //   <h3>${endMessage}</h3>
  // </div>`;
}

//Creating two instances of the Character class for blue and red knight

const heroChar = new Character(characterData.hero);
const skullChar = new Character(characterData.enemy);

//Rendering two characters by setting the innerHTML of the DOM elements to the
//return of the getCharacter() method
function render() {
  document.getElementById("hero").innerHTML = heroChar.getCharacter();
  document.getElementById("enemy").innerHTML = skullChar.getCharacter();
}

render();
