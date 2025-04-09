const express = require('express');
const app = express();
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(ejsLayouts);
app.set('layout', 'layout'); // layout por defecto

app.get('/', (req, res) => {
  res.render('pages/home', { title: 'Oportunidad de Inversión | Sector Lácteo' });
});

app.get('/contacto', (req, res) => {
  res.render('pages/contacto', { title: 'Contacto | Proyecto Lácteos' });
});

// Procesamiento del formulario
app.post('/enviar-contacto', (req, res) => {
  const { nombre, email, mensaje } = req.body;
  console.log("Mensaje recibido:", { nombre, email, mensaje });
  res.send('¡Gracias por contactarte! Te responderemos pronto.');
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
