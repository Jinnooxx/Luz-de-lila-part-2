import express from 'express';
const app = express();



const administrador = {

  name: 'Jorge Camargo',
  isAdmin: false

};

app.set('view engine', 'ejs');

app.use(express.static('asset', {
  extensions: ['css', 'js', 'jpg', 'png', 'mp4']
}));

app.get('/', (req, res) => {
    res.render('pages/index', { esHome: true });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

