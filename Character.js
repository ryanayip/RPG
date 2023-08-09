import { getDiceRollArray, getDicePlaceholderHTML } from "./utils.js";

//Character class
export class Character {
  constructor(data) {
    Object.assign(this, data);
    this.diceArray = getDicePlaceholderHTML(this.diceCount).join("");
  }

  //method to render character to the DOM
  getCharacter() {
    return `
            <div class="character-card">
                <h4 class="name">${this.name}</h4>
                <img class="avatar" src=${this.avatar} />
                <p class="health">health: <b> ${this.health} </b></p>
                <div class="dice-container">${this.diceArray}
            </div>
        `;
  }

  //method to get the dice roll for each character
  getDiceHTML() {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArray = this.currentDiceScore
      .map((num) => {
        return `<div class="dice">${num}</div>`;
      })
      .join("");
  }

  //Take damage method
  takeDamage(attackScoreArray) {
    console.log(`${this.name} takes ${attackScoreArray} damage`);
  }
}
