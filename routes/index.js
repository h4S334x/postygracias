var express = require('express');
var router = express.Router();

// GET / -> Home
router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});
// histiria / 
router.get('/historia', function(req, res) {
  res.render('historia', { title: 'Historia' });
});
//novedades /
router.get('/novedades', function(req, res) {
  res.render('novedades', { title: 'Novedades' });
});
//nosotros /
router.get('/nosotros', function(req, res) {
  res.render('nosotros', { title: 'Nosotros' });
});
//testimonios /
router.get('/testimonios', function(req, res) {
  res.render('testimonios', { title: 'Testimonios' });
});
// contacto: lo saque y lo agregue al contacto.js ahora vive ahi, por metodo post. 


module.exports = router;