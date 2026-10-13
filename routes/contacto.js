var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

// GET /contacto - muestra el formulario
router.get('/', function(req, res) {
  res.render('contacto', { title: 'Contactanos' });
});

// POST /contacto - captura datos y envía el mail
router.post('/', async function(req, res, next) {
  var nombre  = req.body.nombre;
  var email   = req.body.email;
  var tel     = req.body.tel;
  var mensaje = req.body.mensaje;

  var obj = {
    from: 'web@numbis2000.com',
    to: 'xs4mul0v3x@gmail.com',             
    subject: 'CONTACTO WEB',
    html: nombre + ' se contactó a través de la web y quiere más información a este correo: '
        + email + '. <br>Además, hizo este comentario: ' + mensaje + '. <br>Su tel es: ' + tel
  };

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

var info = await transport.sendMail(obj);

    res.render('gracias', { title: 'Mensaje enviado', nombre: nombre, mensaje: mensaje });
  });

module.exports = router;