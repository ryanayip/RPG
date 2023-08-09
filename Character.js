import {
  getDiceRollArray,
  getDicePlaceholderHTML,
  getPercentage,
} from "./utils.js";

//Character class
export class Character {
  constructor(data) {
    Object.assign(this, data);
    this.diceArray = getDicePlaceholderHTML(this.diceCount).join("");
    //Health bar
    this.maxHealth = this.health;
    this.dead = false;
  }

  //method to render character to the DOM
  getCharacter() {
    const healthBar = this.getHealthBar();
    return `
            <div class="character-card">
                <h4 class="name">${this.name}</h4>
                <img class="avatar" src=${this.avatar} />
                <p class="health">health: <b> ${this.health} </b></p>
                ${healthBar}
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
    //temp logging the percentage of health remaining
    console.log(
      `${this.name} has ${getPercentage(
        this.health,
        this.maxHealth
      )}% health remaining`
    );
  }

  getHealthBar() {
    const percent = getPercentage(this.health, this.maxHealth);
    return `<div class="health-bar-outer">
    <div class="health-bar-inner ${percent < 34 ? "danger" : ""} " 
        style="width: ${percent}%;">
    </div>
</div>`;
  }
}
