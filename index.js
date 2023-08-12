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
  //temp text area
  const textArea = document.getElementById("text-area");
  // textArea.innerHTML = `
  //       <h4>${heroChar.name} has dealt ${heroChar.currentDiceScore.reduce(
  //   (a, b) => a + b
  // )} damage!</h4>
  //       <h4>${
  //         currentEnemy.name
  //       } has dealt ${currentEnemy.currentDiceScore.reduce(
  //   (a, b) => a + b
  // )} damage!</h4>
  //       `;
  textArea.innerHTML = `
        <h4>${heroChar.name} has dealt ${heroChar.currentDiceScore.reduce(
    (a, b) => a + b
  )} damage!</h4>`;

  setTimeout(() => {
    textArea.innerHTML += `<h4>${
      currentEnemy.name
    } has dealt ${currentEnemy.currentDiceScore.reduce(
      (a, b) => a + b
    )} damage!</h4>
        `;
  }, 500);

  document.getElementById("attack-button").disabled = true;
  setTimeout(() => {
    document.getElementById("attack-button").disabled = false;
  }, 1500);

  render();
  setTimeout(render, 500);

  //When the enemy dies
  if (currentEnemy.dead) {
    // Disable the button
    setTimeout(heroChar.clearDice(), 500);
    setTimeout(skeleknightChar.clearDice(), 500);
    document.getElementById("attack-button").disabled = true;
    setTimeout(() => {
      textArea.innerHTML = "";
    }, 1000);
    setTimeout(() => {
      textArea.innerHTML = `
    <h3>THE ENEMY HAS BEEN SLAIN. DEFEAT THE ${currentEnemy.name}</h3>`;
    }, 1200);

    // Re-enable the button after 3 seconds
    setTimeout(() => {
      document.getElementById("attack-button").disabled = false;
    }, 3000);
  }
  //Check if either character is dead. If so, end the game
  heroChar.dead && currentEnemy.dead
    ? endGame()
    : heroChar.dead
    ? setTimeout(endGame, 1000)
    : skeleknightChar.dead
    ? setTimeout(endGame, 1100)
    : null;
  currentEnemy = getCurrentEnemy();
  setTimeout(render, 3100);
});

//End game function
function endGame() {
  const endMessage =
    heroChar.dead && currentEnemy.dead
      ? "ALL LIVES HAVE BEEN LOST. TRAGIC."
      : heroChar.dead
      ? "THE HERO HAS BEEN SLAIN."
      : "YOU ARE VICTORIOUS!";

  //end message
  textArea.innerHTML = "";

  textArea.innerHTML = `<div>
    <h2>GAME OVER</h2>
    <h3>${endMessage}</h3>
  </div>`;
}

//Creating four instances of the Character class for all four characters

const heroChar = new Character(characterData.hero);
const skullChar = new Character(characterData.skull);
const witchChar = new Character(characterData.witch);
const skeleknightChar = new Character(characterData.skeleknight);
//Defining the text area
const textArea = document.getElementById("text-area");

//Function to get the current enemy
function getCurrentEnemy() {
  return !skullChar.dead
    ? skullChar
    : skullChar.dead && !witchChar.dead
    ? witchChar
    : witchChar.dead && !skeleknightChar.dead
    ? skeleknightChar
    : null;
}

//Initialising the current enemy
let currentEnemy = getCurrentEnemy();

//Rendering two characters by setting the innerHTML of the DOM elements to the
//return of the getCharacter() method
function render() {
  //Render hero
  document.getElementById("hero").innerHTML = heroChar.getCharacter();
  document.getElementById("enemy").innerHTML = currentEnemy.getCharacter();
}

render();
