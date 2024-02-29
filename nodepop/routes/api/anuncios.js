var express = require('express');
var router = express.Router();
const Anuncio = require('../../modelos/Anuncio');

/* GET /api/anuncios
devuelve una lista de agentes */

router.get('/', async function(req, res, next) {
    try {
        const anuncios = await Anuncio.find();
        res.json({ results: anuncios});

    } catch (error) {
        next(error)
    }
});

module.exports = router;
