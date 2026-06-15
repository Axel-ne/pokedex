function getPokemonCardTemplate(pokemon) {
    return /*html*/`
    <section class="card-content-section">
        <p>#${pokemon.id} ${pokemon.name}</p>
    <div>
        <img src="${pokemon.sprites.front_default}" alt="">
    </div>
<div>
    <img src="" alt="">
    <img src="" alt="">
</div>
</section>
    `     
}