document.getElementById('add-pokemon-form').onsubmit = function (event) {
    event.preventDefault();

    const newPokemon = {
        nome: document.getElementById('nome').value,
        tipagem: document.getElementById('tipagem').value,
        fraquezas: document.getElementById('fraquezas').value,
        vantagens: document.getElementById('vantagens').value,
        status: document.getElementById('status').value,
    };

    fetch('http://localhost:3000/pokemons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPokemon),
    }).then(() => {
        window.location.href = 'index.html';
    });
};
