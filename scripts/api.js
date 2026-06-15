const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

let allPokemon = [];



async function loadPokemon() {
    const response = await fetch(BASE_URL + "?limit=20");
    const data = await response.json();

    const pokemonList = data.results;

    allPokemon = [];

    for (let i = 0; i < pokemonList.length; i++) {
        const pokemonResponse = await fetch(pokemonList[i].url);
        const pokemon = await pokemonResponse.json();

        allPokemon.push(pokemon);
    }

    renderPokemon();
}