const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Esto es la pagina de inicio');
});

app.get('/api', (req, res) => {
    res.json('Esto es la API, de aquí vendran los datos');
});

app.get('*', (req, res) =>{
    res.json('Recurso no encontrado');
});

module.exports = app;