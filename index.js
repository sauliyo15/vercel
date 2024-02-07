
const app = require("./src/routes/index");
const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log('Servidor arrancado y escuchando');
});