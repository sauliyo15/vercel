const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Esto es la pagina de inicio');
});

router.get('/api', (req, res) => {
    res.send('Esto es la API, de aquí vendran los datos');
});

router.get('*', (req, res) =>{
    res.send('Recurso no encontrado');
});

module.exports = router;