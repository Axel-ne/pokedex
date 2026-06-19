function filterPokemon(searchTerm) {
    searchTerm = searchTerm.toLowerCase().trim();

    const cardRef = document.getElementById("pokemon-container");
    const loadMoreBtn = document.querySelector('[data-id="load-more-button"]');

    if (searchTerm.length < 3) {
        loadMoreBtn.style.display = "block";
        renderPokemon();
        return;
    }

    loadMoreBtn.style.display = "none";

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