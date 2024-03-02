var express = require('express');
var router = express.Router();
const Anuncio = require('../modelos/Anuncio');

//GET Home page with anuncios list
router.get('/', async function(req, res, next) {
  try {
    //filters
    //http://127.0.0.1:3000/api/anuncios?tags=lifestyle&nombre=bicicleta&venta=true
    const filterByName = req.query.nombre;
    const filterByTag = req.query.tags;
    const filterByVenta = req.query.venta;

    //page
    //http://127.0.0.1:3000/api/anuncios?skip=2&limit=5
    const skip = req.query.skip;
    const limit = req.query.limit;

    //field list
    //http://127.0.0.1:3000/api/anuncios?fields=nombre&fields=tags
    const fields = req.query.fields
    
    const filter = {}

    // ?nombre=nombre
    if (filterByName) {
        filter.nombre = { $regex: `^${filterByName}`, $options: 'i' };
    }
    // ?tags=nombre
    if (filterByTag) {
        filter.tags = { $all: filterByTag };
    }
    // ?venta=true or false
    if (filterByVenta === 'true') {
        filter.venta = true
    } else if (filterByVenta === 'false') {
        filter.venta = false
    } 
    const anuncios = await Anuncio.listar(filter, skip, limit, fields);
    res.locals.anuncios = anuncios
    
    res.render('index', { 
      title: 'Nodepop',
  });

  } catch (error) {
    next(error)
  }

});

//GET list by filters

router.get('/:', async function(req, res, next) {
  //
})



module.exports = router;

