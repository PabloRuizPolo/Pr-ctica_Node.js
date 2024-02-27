var express = require('express');
var router = express.Router();
const Anuncio = require('../../modelos/Anuncio');
require('../../lib/connectMongoose');


const newAdd = new Anuncio({
    nombre: 'Pablo Casa',
    venta: true,
    precio: 50
});
const newAdd2 = new Anuncio({
    nombre: 'Pepe Casa',
    venta: true,
    precio: 50000
});

/*
newAdd.save(function(err, agenteCreado) {
    if (err) throw err;
    console.log('Agente ' + agenteCreado.nombre + ' creado')
})
*/
newAdd.save();
newAdd2.save();



module.exports = router;
