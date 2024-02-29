const mongoose = require('mongoose')

// Creo el schema de los anuncios
const anuncioSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    venta: { type: Boolean, required: true, index: true }, 
    precio: { type: Number, index: true }, 
    foto: String, 
    tags: {
        type: [String],
        enum: ['work', 'lifestyle', 'motor', 'mobile']
    }
});

//Defino el metodo listar, lo puedo hacer en el modelo este
anuncioSchema.statics.listar = function() {
    const query = Anuncio.find()
    return query.exec()
}


// Creo el modelo de los anuncios
const Anuncio = mongoose.model('Anuncio', anuncioSchema);


//Exporto el modelo
module.exports = Anuncio;