import { characterData } from "./chardata.js";
import { Character } from "./Character.js";

//Attack button
document.getElementById("attack-button").addEventListener("click", () => {
  //Get the dice roll for each character
  heroChar.getDiceHTML();
  currentEnemy.getDiceHTML();
  //Take damage based on total of dice roll
  heroChar.takeDamage(currentEnemy.currentDiceScore);
  currentEnemy.takeDamage(heroChar.currentDiceScore);
  //Check if either character is dead. If so, end the game
  heroChar.dead && currentEnemy.dead ? endGame() : null;
  skeleknightChar.dead ? endGame() : null;
  currentEnemy = getCurrentEnemy();
  render();
});

//End game function
function endGame() {
  const endMessage =
    heroChar.dead && currentEnemy.dead
      ? "All lives have been lost. Tragic"
      : heroChar.dead
      ? "The Hero has been slain."
      : "You are victorious!";
  console.log(endMessage);

  //end message
  document.body.innerHTML = `<div class="end-game">
    <h2>Game Over</h2>
    <h3>${endMessage}</h3>
  </div>`;
}

//Creating four instances of the Character class for all four characters

const heroChar = new Character(characterData.hero);
const skullChar = new Character(characterData.skull);
const witchChar = new Character(characterData.witch);
const skeleknightChar = new Character(characterData.skeleknight);

//Setting the current enemy to the skull character
//let currentEnemy = skullChar;
//Setting the current enemy to the skull character, unless they're dead. Currently broken.

let currentEnemy = getCurrentEnemy();

function getCurrentEnemy() {
  return !skullChar.dead
    ? skullChar
    : skullChar.dead && !witchChar.dead
    ? witchChar
    : witchChar.dead && !skeleknightChar.dead
    ? skeleknightChar
    : null;
}

//Rendering two characters by setting the innerHTML of the DOM elements to the
//return of the getCharacter() method
function render() {
  //Render hero
  document.getElementById("hero").innerHTML = heroChar.getCharacter();
  document.getElementById("enemy").innerHTML = currentEnemy.getCharacter();
}

render();
