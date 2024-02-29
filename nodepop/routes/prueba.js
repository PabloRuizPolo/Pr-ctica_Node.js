var express = require('express');
var router = express.Router();
const Anuncio = require('../modelos/Anuncio');


/* GET prueba page. 
router.get('/', function(req, res, next) {
  res.send('Estamos en la página de prueba');
});
router.get('/', async function(req, res, next) {
  try {
    const anuncios = await Anuncio.find();
    res.json({ results: anuncios});
    
  } catch (error) {
    next(error)
  }
})
*/



module.exports = router;