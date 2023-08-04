document.getElementById("hero").innerHTML = `
    <div class="character-card">
        <h4 class="name"> Knight </h4>
        <img class="avatar" src="images/knight-blue.png" />
        <p class="health">health: <b> 60 </b></p>
        <div class="dice-container"><div class="dice"> 6 </div></div>
    </div>   
`;

document.getElementById("enemy").innerHTML = `
    <div class="character-card">
        <h4 class="name">Enemy</h4>
        <img class="avatar" src="images/knight-red.png" />
        <p class="health">health: <b> 10 </b></p>
        <div class="dice-container"><div class="dice">4</div></div>
    </div>
`;
