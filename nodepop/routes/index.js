var express = require('express');
var router = express.Router();
const Anuncio = require('../modelos/Anuncio');
const mongoose = require('mongoose')

//GET Home page with anuncios list
router.get('/', async function(req, res, next) {
  const anuncios = await Anuncio.find();
  res.locals.anuncios = anuncios
  
  res.render('index', { 
    title: 'Nodepop',
  });

});



module.exports = router;

