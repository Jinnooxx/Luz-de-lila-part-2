import express from 'express';
const app = express();



const administrador = {

  name: 'Jorge Camargo',
  isAdmin: false

};

app.set('view engine', 'ejs');

app.use(express.static('Public'));

app.get('/', (req, res) => {
  res.render('pages/index', {administrador});
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

