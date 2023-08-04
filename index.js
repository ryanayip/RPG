import { characterData } from "./chardata.js";
import { Character } from "./Character.js";

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
