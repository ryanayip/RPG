const hero = {
  elementId: "hero",
  name: "Hero",
  avatar: "images/knight-blue.png",
  health: 60,
  diceRoll: 6,
};

const enemy = {
  elementId: "enemy",
  name: "Enemy",
  avatar: "images/knight-red.png",
  health: 10,
  diceRoll: 4,
};

function renderCharacter(character) {
  document.getElementById(`${character.elementId}`).innerHTML = `
        <div class="character-card">
            <h4 class="name">${character.name}</h4>
            <img class="avatar" src=${character.avatar} />
            <p class="health">health: <b> ${character.health} </b></p>
            <div class="dice-container"><div class="dice">${character.diceRoll}</div></div>
        </div>
    `;
}
renderCharacter(hero);
renderCharacter(enemy);

console.log("Testing Github desktop");
