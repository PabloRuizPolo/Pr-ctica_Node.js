const mongoose = require('mongoose')

mongoose.connection.on('error', err => {
    console.log('Connection error ', err
    )
});
mongoose.connection.once('open', () => {
    console.log('Conect to mongodb at ', mongoose.connection.name)
})

mongoose.connect('mongodb://127.0.0.1:27017/Nodepop')

module.exports = mongoose.connection;