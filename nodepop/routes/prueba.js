var express = require('express');
var router = express.Router();

/* GET prueba page. */
router.get('/', function(req, res, next) {
  res.send('Estamos en la página de prueba');
});

const mongoose = require('mongoose');
const Anuncio = require('../modelos/Anuncio'); // Ruta al archivo donde se define el modelo
require('./lib/connectMongoose');


const newAdd = new Anuncio({
  nombre: 'Pablo Casa',
  venta: true,
  precio: 50
});

await newAdd.save();

module.exports = router;