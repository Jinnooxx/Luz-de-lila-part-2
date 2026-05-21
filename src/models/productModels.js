const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../data/products.json');

const getAllProducts = () => {
  const productsData = fs.readFileSync(productsFilePath, 'utf-8');
  return JSON.parse(productsData);
};

const getProductById = (id) => {
  const products = getAllProducts();
  return products.find(product => product.id === id);
};

const getProductCat = (cat) => {
const products = getAllProducts();
return products.filter(product => product.categoria === cat)

}

const getProductFeatured = () =>{

  const products = getAllProducts();
  return products.filter(product => product.destacado === true);

}


module.exports = productModels = {
  getAllProducts,
  getProductById,
  getProductCat,
  getProductFeatured
}; 


