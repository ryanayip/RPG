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
    const totalAttackScore = attackScoreArray.reduce((a, b) => a + b);
    this.health -= totalAttackScore;
    if (this.health <= 0) {
      this.health = 0;
      this.dead = true;
    }
    console.log(
      `${this.name} took ${totalAttackScore} damage and has ${this.health} remaining!`
    );
  }
}
