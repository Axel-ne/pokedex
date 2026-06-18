function renderPokemon() {
    const cardRef = document.getElementById("pokemon-container");

    cardRef.innerHTML = "";

    for (let i = 0; i < allPokemon.length; i++) {
        cardRef.innerHTML += getPokemonCardTemplate(allPokemon[i]);
    }
}

function renderNewPokemon(pokemon) {
    const cardRef = document.getElementById("pokemon-container");
    cardRef.innerHTML += getPokemonCardTemplate(pokemon);
}

function renderTypes(types) {
    let pkmtype = "";

    for (let i = 0; i < types.length; i++) {
        pkmtype += `<p>${types[i].type.name}</p>`;
    }

    return pkmtype;
} 