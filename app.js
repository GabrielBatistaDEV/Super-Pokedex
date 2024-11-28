const express = require('express');
const db = require('./db');
const app = express();
const PORT = 3000;

app.use(express.json());

// Endpoint para listar todos os pokémons
app.get('/pokemons', (req, res) => {
    db.all("SELECT * FROM pokemons", [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

// Endpoint para adicionar um novo pokémon
app.post('/pokemons', (req, res) => {
    const { nome, tipagem, fraquezas, vantagens, status } = req.body;
    db.run(
        "INSERT INTO pokemons (nome, tipagem, fraquezas, vantagens, status) VALUES (?, ?, ?, ?, ?)",
        [nome, tipagem, fraquezas, vantagens, status],
        function (err) {
            if (err) {
                return res.status(500).send("Erro ao adicionar Pokémon.");
            }
            res.status(201).send({ id: this.lastID });
        }
    );
});

// Endpoint para atualizar um pokémon
app.put('/pokemons/:id', (req, res) => {
    const { nome, tipagem, fraquezas, vantagens, status } = req.body;
    const { id } = req.params;
    
    db.run(
        "UPDATE pokemons SET nome = ?, tipagem = ?, fraquezas = ?, vantagens = ?, status = ? WHERE id = ?",
        [nome, tipagem, fraquezas, vantagens, status, id],
        function (err) {
            if (err) {
                return res.status(500).send("Erro ao atualizar Pokémon.");
            }
            res.send('Pokémon atualizado.');
        }
    );
});

// Endpoint para deletar um pokémon
app.delete('/pokemons/:id', (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM pokemons WHERE id = ?", [id], function (err) {
        if (err) {
            return res.status(500).send("Erro ao excluir Pokémon.");
        }
        res.send('Pokémon excluído.');
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
