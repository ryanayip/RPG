/*
Challenge: 
1. Take the hard-coded HTML for the Wizard card, bring it 
   into index.js and then inject it back into its div with 
   JavaScript.
2. Do the same for Orc card. 
*/

const heroDiv = document.getElementById("hero");
const orcDiv = document.getElementById("monster");

heroDiv.innerHTML = `
    <div class="character-card">
        <h4 class="name"> Knight </h4>
        <img class="avatar" src="images/knightcropped.png" />
        <p class="health">health: <b> 60 </b></p>
        <div class="dice-container"><div class="dice"> 6 </div></div>
    </div>   
`;

orcDiv.innerHTML = `
    <div class="character-card">
        <h4 class="name">Dragon</h4>
        <img class="avatar" src="images/dragoncropped.png" />
        <p class="health">health: <b> 10 </b></p>
        <div class="dice-container"><div class="dice">4</div></div>
    </div>
`;
