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
  render();
  setTimeout(render, 200);
  //Check if either character is dead. If so, end the game
  heroChar.dead && currentEnemy.dead
    ? endGame()
    : heroChar.dead
    ? setTimeout(endGame, 1000)
    : skeleknightChar.dead
    ? setTimeout(endGame, 1000)
    : null;

  if (currentEnemy.dead) {
    // Disable the button
    document.getElementById("attack-button").disabled = true;

    // Re-enable the button after 1 seconds
    setTimeout(() => {
      document.getElementById("attack-button").disabled = false;
    }, 1000);
  }

  currentEnemy = getCurrentEnemy();
  setTimeout(render, 1000);
});

//End game function
function endGame() {
  const endMessage =
    heroChar.dead && currentEnemy.dead
      ? "ALL LIVES HAVE BEEN LOST. TRAGIC."
      : heroChar.dead
      ? "THE HERO HAS BEEN SLAIN."
      : "YOU ARE VICTORIOUS!";
  console.log(endMessage);

  //end message
  document.body.innerHTML = `<div class="end-game">
    <h2>GAME OVER</h2>
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
