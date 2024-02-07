const express = require("express");
const app = express();
const indexRouter = require('./routes/index');

const port = process.env.PORT || 3000;

app.use(indexRouter);

app.listen(port, ()=> {
    console.log('Servidor arrancado y escuchando');
});