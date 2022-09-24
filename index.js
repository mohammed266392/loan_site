const dotenv = require('dotenv');
const express = require('express');
dotenv.config();

const app = express();

// réglages views
app.set('views', 'app/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

const PORT =  5000;
// les statiques
app.use(express.static('public'));

// on rajoute la gestion des POST body
app.use(express.urlencoded({extended: true}));


// le routage
const router = require('./app/router');
app.use(router);

// lancement du serveur
app.listen( PORT,  () => {
  console.log(`http://localhost:${PORT}`);
});
