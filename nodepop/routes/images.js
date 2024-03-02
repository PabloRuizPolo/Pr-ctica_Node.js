var express = require('express');
var router = express.Router();
const Anuncio = require('../modelos/Anuncio');
const path = require('path');


//GET Images from anuncios
//http://127.0.0.1:3000/images/Bicicleta
router.get('/:anuncio', async function (req, res, next) {
    try {
        const anuncio = req.params.anuncio;
        const findAnuncio = await Anuncio.findOne({nombre: { $regex: `^${anuncio}$`, $options: 'i' }})
        
        if (!findAnuncio) {
            res.json({error: 'No hemos encontrado este anuncio. Prueba de nuevo'})
        }

        const imageAbsolutPath = path.resolve(__dirname, '..', 'public', 'images', findAnuncio.foto)
        res.sendFile(imageAbsolutPath)

    } catch (error) {
       next(error)
    }

});

module.exports = router;

