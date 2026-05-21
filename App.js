const express = require ('express');
const app = express();
const path = require('path');
const productRoutes = require('./src/routes/productRoutes');




app.use('/productos', productRoutes);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

app.use(express.static('asset', {
  extensions: ['css', 'js', 'jpg', 'png', 'mp4','svg']
}));

app.get('/', (req, res) => {
    res.render('pages/index', { esHome: true });
});

app.listen(3000, () => {
  console.log('http://localhost:3000/');
});



