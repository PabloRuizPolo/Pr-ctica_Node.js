var express = require('express');
var router = express.Router();

/* GET prueba page. */
router.get('/', function(req, res, next) {
  res.send('Estamos en la página de prueba');
  next(error);
});

module.exports = router;