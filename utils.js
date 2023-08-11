//Roll dice function. Random number 1-6

export function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(() => {
    return Math.floor(Math.random() * 6) + 1;
  });
}

//Dice placeholder based on dice count from character data

export function getDicePlaceholderHTML(diceCount) {
  return new Array(diceCount).fill(0).map(() => {
    return `<div class="placeholder-dice"></div>`;
  });
}

//Health bar percentage

export const getPercentage = (remainingHealth, maxHealth) =>
  (remainingHealth / maxHealth) * 100;
