const express = require('express');
const router = express.Router();

// Página principal
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Oportunidad de Inversión | Sector Lácteo',
    empresa: {
      nombre: 'Proyecto Lácteos Latam',
      mensaje: 'Calidad real, visión compartida.',
    },
  });
});

module.exports = router;
