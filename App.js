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


app.listen(3000, () => {
  console.log('http://localhost:3000/');
});



