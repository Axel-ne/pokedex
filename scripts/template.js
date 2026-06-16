function getPokemonCardTemplate(pokemon) {
    return /*html*/ `
    <section class="card-content-section">
        <p>#${pokemon.id} ${pokemon.name}</p>
    <div class="pokemon-card-wrapper" style="background-color: ${pokemonTypeColors[pokemon.types[0].type.name]}">
        <img src="${pokemon.sprites.front_default}" alt="">
    </div>
<div class="type-wrapper">
    <div>
    ${renderTypes(pokemon.types)}
    </div>
</div>
</section>
    `;
}
