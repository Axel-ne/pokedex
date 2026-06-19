function filterPokemon(searchTerm) {
    searchTerm = searchTerm.toLowerCase().trim();

    const cardRef = document.getElementById("pokemon-container");

    if (searchTerm.length < 3) {
        renderPokemon();
        return;
    }

    cardRef.innerHTML = "";

    for (let i = 0; i < allPokemon.length; i++) {
        if (allPokemon[i].name.toLowerCase().includes(searchTerm)) {
            cardRef.innerHTML += getPokemonCardTemplate(allPokemon[i]);
        }
    }
}

function chrdBtnRight(id) {
    if (id >= allPokemon.length) {
        openDialog(1)
    } else {
        openDialog(id + 1);
    }
}

function cardBtnLeft(id) {
    if (id <= 1) {
        openDialog(allPokemon.length);
    } else {
        openDialog(id - 1);
    }
}

function showLoadingSpinner(){
setTimeout(() => {hideLoadingSpinner();}, 3000);

document.getElementById("loading-spinner").classList.remove("d-none");
}

function hideLoadingSpinner(){
document.getElementById("loading-spinner").classList.add("d-none");
}