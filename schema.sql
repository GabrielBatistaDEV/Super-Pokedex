CREATE TABLE IF NOT EXISTS pokemons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    tipagem TEXT NOT NULL,
    fraquezas TEXT NOT NULL,
    vantagens TEXT NOT NULL,
    status TEXT NOT NULL
);
