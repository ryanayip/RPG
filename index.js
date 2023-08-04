import { hero, enemy } from "./chardata.js";

//Character class
class Character {
  constructor(data) {
    Object.assign(this, data);
  }

  //method to render character to the DOM
  getCharacter = () => {
    const diceHtml = getDiceHTML(this.diceCount).join("");
    document.getElementById(`${this.elementId}`).innerHTML = `
          <div class="character-card">
              <h4 class="name">${this.name}</h4>
              <img class="avatar" src=${this.avatar} />
              <p class="health">health: <b> ${this.health} </b></p>
              <div class="dice-container">${diceHtml}
          </div>
      `;
  };
}

const blueKnight = new Character(hero);
const redKnight = new Character(enemy);
//Roll dice function

function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(() => {
    return Math.floor(Math.random() * 6) + 1;
  });
}

function getDiceHTML(diceCount) {
  return getDiceRollArray(diceCount).map((num) => {
    return `<div class="dice">${num}</div>`;
  });
}

//Rendering two characters

blueKnight.getCharacter();
redKnight.getCharacter();
