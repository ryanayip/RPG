import { characterData } from "./chardata.js";
import { Character } from "./Character.js";
import { getDiceRollArray } from "./utils.js";

//Attack button
document.getElementById("attack-button").addEventListener("click", () => {
  //Get the dice roll for each character
  blueKnight.getDiceHTML();
  redKnight.getDiceHTML();
  blueKnight.takeDamage(redKnight.currentDiceScore.reduce((a, b) => a + b));
  redKnight.takeDamage(blueKnight.currentDiceScore.reduce((a, b) => a + b));
  render();
});

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
