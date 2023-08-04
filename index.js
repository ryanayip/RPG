const hero = {
  elementId: "hero",
  name: "Hero",
  avatar: "images/knight-blue.png",
  health: 60,
  diceRoll: [3, 1, 4],
  diceCount: 3,
};

const enemy = {
  elementId: "enemy",
  name: "Enemy",
  avatar: "images/knight-red.png",
  health: 10,
  diceRoll: [2],
  diceCount: 1,
};

//Character class

function Character(data) {
  this.elementId = data.elementId;
  this.name = data.name;
  this.avatar = data.avatar;
  this.health = data.health;
  this.diceRoll = data.diceRoll;
  this.diceCount = data.diceCount;
  //method to render character to the DOM
  this.getCharacter = () => {
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
