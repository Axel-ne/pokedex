function renderPokemon() {
    const cardRef = document.getElementById("pokemon-container");

    cardRef.innerHTML = "";

    for (let i = 0; i < allPokemon.length; i++) {
        cardRef.innerHTML += getPokemonCardTemplate(allPokemon[i]);
    }
}