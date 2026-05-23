const express = require ('express');
const app = express();
const path = require('path');
const productRoutes = require('./src/routes/productRoutes');
require('./src/database/db');



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

app.use(express.static(path.join(__dirname, 'asset')));

app.use('/', productRoutes);

// ==========================================
// RUTAS DE RECUPERACIÓN DE CONTRASEÑA
// ==========================================

// PÁGINA PARA CAMBIAR CONTRASEÑA (Muestra la vista EJS que armaste)
app.get('/reset-password', (req, res) => {
  res.render('pages/reset-password'); 
});

// GUARDAR NUEVA CONTRASEÑA
app.post('/reset-password', (req, res) => {
  const { password } = req.body;
  console.log('Nueva contraseña:', password);
  res.send('Contraseña cambiada correctamente');
});

// ENVIAR EL CORREO DE RECUPERACIÓN
app.post('/recover-password', async (req, res) => {
  const { email } = req.body;
  // Acá iría la lógica de nodemailer de tu amigo 
  // (¡Asegurate de usar variables de entorno para la contraseña del mail!)
  res.send('Correo enviado correctamente a: ' + email);
});

app.listen(3000, () => {
  console.log('http://localhost:3000/');
});



