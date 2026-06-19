const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

let allPokemon = [];

let offset = 0;

const limit = 20;

async function loadPokemon() {
    showLoadingSpinner();
    const response = await fetch(
        `${BASE_URL}?limit=${limit}&offset=${offset}`
    );

    const data = await response.json();
    const pokemonList = data.results;

    for (let i = 0; i < pokemonList.length; i++) {
        const pokemonResponse = await fetch(pokemonList[i].url);
        const pokemon = await pokemonResponse.json();

        allPokemon.push(pokemon);
        renderNewPokemon(pokemon);
    }

    offset += limit;
hideLoadingSpinner();
}