import { getDiceRollArray, getDicePlaceholderHTML } from "./utils.js";

//Character class
export class Character {
  constructor(data) {
    Object.assign(this, data);
    this.diceArray = getDicePlaceholderHTML(this.diceCount).join("");
  }

  //method to render character to the DOM
  getCharacter() {
    const diceHtml = this.getDiceHTML(this.diceCount).join("");
    return `
            <div class="character-card">
                <h4 class="name">${this.name}</h4>
                <img class="avatar" src=${this.avatar} />
                <p class="health">health: <b> ${this.health} </b></p>
                <div class="dice-container">${this.diceArray}
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
