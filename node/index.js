const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Listas de nomes e sobrenomes
const nomes = ["Ana", "Lucas", "Miguel", "Sofia", "Julia", "Arthur", "Pedro", "Gabriel"];
const sobrenomes = ["Silva", "Santos", "Oliveira", "Souza", "Rodrigues", "Ferreira", "Almeida", "Pereira"];

// Função para escolher um nome e sobrenome aleatórios
function gerarNomeAleatorio() {
    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
    return nome + ' ' + sobrenome;
}

// Configuração do banco de dados
const connection = mysql.createConnection({
    host: 'db', // Nome do serviço no docker-compose
    user: 'root',
    password: 'password',
    database: 'fullcycle'
});

// Conectar ao banco de dados
connection.connect(error => {
    if (error) {
        console.error('Erro ao conectar no banco de dados:', error);
        return;
    }

    console.log('Conectado com sucesso ao banco de dados MySQL');

    // Verificar se a tabela 'people' existe e criá-la se necessário
    const createTableSql = `
        CREATE TABLE IF NOT EXISTS people (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        )
    `;
    connection.query(createTableSql, error => {
        if (error) {
            console.error('Erro ao criar a tabela "people":', error);
            return;
        }

        console.log('Tabela "people" verificada/criada com sucesso');
    });
});

app.get('/', (req, res) => {
    const nomeCompleto = gerarNomeAleatorio();

    // Adiciona um nome ao banco de dados
    connection.query(`INSERT INTO people (name) VALUES ('${nomeCompleto}')`, (err) => {
        if (err) {
            console.error('Erro ao inserir nome:', err);
            res.status(500).send('Erro ao inserir nome no banco de dados');
            return;
        }

        // Recupera os nomes do banco de dados
        connection.query('SELECT name FROM people', (err, results) => {
            if (err) {
                console.error('Erro ao recuperar nomes:', err);
                res.status(500).send('Erro ao recuperar nomes do banco de dados');
                return;
            }

            const names = results.map(row => row.name).join('<br>');
            res.send(`<h1>Full Cycle Rocks!</h1><br>${names}`);
        });
    });
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});
