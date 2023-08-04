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

function renderCharacter(character) {
  const { elementId, name, avatar, health, diceRoll, diceCount } = character;

  let diceHtml = diceRoll.map((dice) => {
    return `<div class="dice">${dice}</div>`;
  });

  document.getElementById(`${elementId}`).innerHTML = `
        <div class="character-card">
            <h4 class="name">${name}</h4>
            <img class="avatar" src=${avatar} />
            <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container">${diceHtml}
        </div>
    `;
}

renderCharacter(hero);
renderCharacter(enemy);
