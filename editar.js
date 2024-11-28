const pokemonId = localStorage.getItem('currentPokemonId');

fetch(`http://localhost:3000/pokemons/${pokemonId}`)
    .then(response => response.json())
    .then(pokemon => {
        document.getElementById('nome').value = pokemon.nome;
        document.getElementById('tipagem').value = pokemon.tipagem;
        document.getElementById('fraquezas').value = pokemon.fraquezas;
        document.getElementById('vantagens').value = pokemon.vantagens;
        document.getElementById('status').value = pokemon.status;
    });

document.getElementById('edit-pokemon-form').onsubmit = function (event) {
    event.preventDefault();

    const updatedPokemon = {
        nome: document.getElementById('nome').value,
        tipagem: document.getElementById('tipagem').value,
        fraquezas: document.getElementById('fraquezas').value,
        vantagens: document.getElementById('vantagens').value,
        status: document.getElementById('status').value,
    };

    fetch(`http://localhost:3000/pokemons/${pokemonId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPokemon),
    }).then(() => {
        window.location.href = 'index.html';
    });
};
