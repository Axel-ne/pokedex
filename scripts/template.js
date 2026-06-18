function getPokemonCardTemplate(pokemon) {
    return /*html*/ `
    <section class="card-content-section" onclick="openDialog(${pokemon.id})">
        <p>#${pokemon.id} ${pokemon.name}</p>
        <div class="pokemon-card-wrapper"
            style="background-color: ${pokemonTypeColors[pokemon.types[0].type.name]}">
            <img src="${pokemon.sprites.other.home.front_default}" alt="">
        </div>
        <div class="type-wrapper">
            <div>
                ${renderTypes(pokemon.types)}
            </div>
        </div>
    </section>
    `;
}

function getDialogTemplate(pokemon) {
    return /*html*/ `
    <div class="dialog-headline-wrapper">
        
        <h2># ${pokemon.id} ${pokemon.name}</h2>
        <div class="close-btn-wrapper">
        <button class="close-btn" onclick="closeDialog()">X</button>
        </div>
        </div>
        <div class="dialog-img-wrapper" >
            <div class="dialog-img-content" style="background-color: ${pokemonTypeColors[pokemon.types[0].type.name]}">
        <img src="${pokemon.sprites.other.home.front_default}" alt="">
        </div>
        </div>
        <div class="dialog-type-wrapper">
        ${renderTypes(pokemon.types)}
        </div>
        <div class="stats-table-wrapper">
            <table>
                <tr>
                    <td>HP</td>
                    <td>${pokemon.stats[0].base_stat}</td>
                </tr>
                <tr>
                    <td>ATK</td>
                    <td>${pokemon.stats[1].base_stat}</td>
                </tr>
                <tr>
                    <td>DEF</td>
                    <td>${pokemon.stats[2].base_stat}</td>
                </tr>
            </table>
            <div class="spipe-btn-wrapper">
            <button onclick="btn_L(${pokemon.id})">L</button>
            <button onclick="btn_R(${pokemon.id})">R</button>
            </div>
        </div>
    `;
}
