const pokemonList = document.getElementById("pokemon-list");

function loadPokemons() {
    fetch('http://localhost:3000/pokemons')
        .then(response => response.json())
        .then(data => {
            pokemonList.innerHTML = '';
            data.forEach(pokemon => {
                const card = document.createElement('div');
                card.classList.add('pokemon-card');
                card.innerHTML = `
                    <h3>${pokemon.nome}</h3>
                    <p>Tipagem: ${pokemon.tipagem}</p>
                    <p>Fraquezas: ${pokemon.fraquezas}</p>
                    <p>Vantagens: ${pokemon.vantagens}</p>
                    <p>Status: ${pokemon.status}</p>
                    <button onclick="editPokemon(${pokemon.id})">Editar</button>
                    <button onclick="deletePokemon(${pokemon.id})">Excluir</button>
                `;
                pokemonList.appendChild(card);
            });
        });
}

function editPokemon(id) {
    localStorage.setItem('currentPokemonId', id);
    window.location.href = 'editar.html';
}

function deletePokemon(id) {
    fetch(`http://localhost:3000/pokemons/${id}`, {
        method: 'DELETE',
    }).then(() => loadPokemons());
}

document.addEventListener('DOMContentLoaded', loadPokemons);
