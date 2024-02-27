const mongoose = require('mongoose')

mongoose.connection.on('error', err => {
    console.log('Error de conexion ', err
    )
});
mongoose.connection.once('open', () => {
    console.log('Conectado a mongodb en ', mongoose.connection.name)
})

mongoose.connect('mongodb://127.0.0.1:27017/Nodepop')

module.exports = mongoose.connection;