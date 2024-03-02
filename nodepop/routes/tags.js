var express = require('express');
var router = express.Router();
const Anuncio = require('../../modelos/Anuncio');

//Tags list
//http://127.0.0.1:3000/api/anuncios/tags?tags
router.get('/', async function(req, res, next) {
    try {
        const fieldsOut = '-_id -venta -precio -foto -__v';

        const fields = req.query.fields || fieldsOut;


        const anuncios = await Anuncio.listar(fields);
        res.json({ results: anuncios });

    } catch (error) {
        next(error);
    }
});