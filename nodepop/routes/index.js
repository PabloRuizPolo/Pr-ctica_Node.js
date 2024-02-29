var express = require('express');
var router = express.Router();
const Anuncio = require('../modelos/Anuncio');
const mongoose = require('mongoose')


/* GET home page. 
router.get('/', async function(req, res, next) {
  try {
      const anuncio = await Anuncio.find({nombre: 'Neopreno'});
      res.locals.anuncios = anuncio

  } catch (error) {
      next(error)
  }
});*/

router.get('/', async function(req, res, next) {
  const anuncios = await Anuncio.find();
  res.locals.anuncios = anuncios
  
  res.render('index', { 
    title: 'Nodepop',
  });

});

module.exports = router;

