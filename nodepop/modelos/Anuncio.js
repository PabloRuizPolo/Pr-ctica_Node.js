const mongoose = require('mongoose')

// Create de Anuncios schema
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

//Set the method list
anuncioSchema.statics.listar = function(filtro, skip, limit, fields) {
    const query = Anuncio.find(filtro);
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    return query.exec()
}


// Create the anuncios model
const Anuncio = mongoose.model('Anuncio', anuncioSchema);


//Export the model
module.exports = Anuncio;