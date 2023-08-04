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

//Roll dice function

function getDiceRollArray(diceCount) {
  const newDiceRolls = [];
  for (let i = 0; i < diceCount; i++) {
    newDiceRolls.push(Math.floor(Math.random() * 6) + 1);
  }
  return newDiceRolls;
}

function getDiceHTML(diceCount) {
  return getDiceRollArray(diceCount).map((num) => {
    return `<div class="dice">${num}</div>`;
  });
}

//Render character function
function renderCharacter(character) {
  const { elementId, name, avatar, health, diceRoll, diceCount } = character;

  const diceHtml = getDiceHTML(diceCount).join("");

  document.getElementById(`${elementId}`).innerHTML = `
        <div class="character-card">
            <h4 class="name">${name}</h4>
            <img class="avatar" src=${avatar} />
            <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container">${diceHtml}
        </div>
    `;
}

//Rendering two characters
renderCharacter(hero);
renderCharacter(enemy);
