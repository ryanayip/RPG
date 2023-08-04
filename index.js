import { characterData } from "./chardata.js";

//Character class
class Character {
  constructor(data) {
    Object.assign(this, data);
  }

  //method to render character to the DOM
  getCharacter() {
    const diceHtml = this.getDiceHTML(this.diceCount).join("");
    return `
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
