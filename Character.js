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
      // Switch to dead avatar version
      this.avatar = this.deadAvatar;
    }
    //Changing image while taking damage
    if (this.health > 0) {
      // Switch to damaged avatar version
      this.avatar = `${this.avatar.replace(".png", "")}-dmg.png`;
      // After 0.5 seconds, revert back to the original avatar
      setTimeout(() => {
        this.avatar = `${this.avatar.replace("-dmg.png", ".png")}`;
      }, 200);
    }
  }

  clearDice() {
    this.diceArray = getDicePlaceholderHTML(this.diceCount).join("");
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
