import { hero, enemy } from "./chardata.js";

//Character class
class Character {
  constructor(data) {
    Object.assign(this, data);
  }

  //method to render character to the DOM
  getCharacter() {
    const diceHtml = this.getDiceHTML(this.diceCount).join("");
    document.getElementById(`${this.elementId}`).innerHTML = `
          <div class="character-card">
              <h4 class="name">${this.name}</h4>
              <img class="avatar" src=${this.avatar} />
              <p class="health">health: <b> ${this.health} </b></p>
              <div class="dice-container">${diceHtml}
          </div>
      `;
  }

  //Method to append dice to DOM
  getDiceHTML() {
    return getDiceRollArray(this.diceCount).map((num) => {
      return `<div class="dice">${num}</div>`;
    });
  }
}

//Roll dice function. Random number 1-6
function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(() => {
    return Math.floor(Math.random() * 6) + 1;
  });
}

//Creating the two characters from the Character class

const blueKnight = new Character(hero);
const redKnight = new Character(enemy);

//Rendering two characters

blueKnight.getCharacter();
redKnight.getCharacter();
