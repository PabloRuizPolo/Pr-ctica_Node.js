const mongoose = require('mongoose')

// Creo el schema de los anuncios
const anuncioSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    venta: { type: Boolean, required: true, index: true }, 
    precio: { type: Number, index: true }, 
    foto: String, 
    tags: [String]
}, {
    collection: 'anuncios'
});


// Creo el modelo de los anuncios
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

//Exporto el modelo
module.exports = Anuncio;