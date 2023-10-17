const express = require('express');
const app = express();
const port = 3000;
const ejs = require('ejs');
const routes = require('./routes/routes.js');

app.use(express.static('public'));
app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.render('index');
// });

app.use('/', routes);

app.get('/test', (req, res) => {
    res.send('Esta es una ruta de prueba');
});

app.listen(port, () => {
    console.log(`La aplicacion está escuchando en http://localhost:${port}`);
});

