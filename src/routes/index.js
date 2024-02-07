const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Esto es la pagina de inicio');
});

app.get('/api', (req, res) => {
    res.send('Esto es la API, de aquí vendran los datos');
});

router.get('*', (req, res) =>{
    res.send('Recurso no encontrado');
});

module.exports = app;