function openDialog(id) {
    let pokemon;

    for (let i = 0; i < allPokemon.length; i++) {
        if (allPokemon[i].id === id) {
            pokemon = allPokemon[i];
        }
    }

    let dialogRef = document.getElementById("pokemon-dialog");

    dialogRef.innerHTML = getDialogTemplate(pokemon);

    dialogRef.showModal();
}

function closeDialog(){
document.getElementById("pokemon-dialog").close();
}