const productModels = require('../models/productModels'); 

const getAllProducts = (req, res) => {
  const products = productModels.getAllProducts(); 
  
 
  res.render('index', { listaVelas: products }); 
};

const getProductById = (req, res) => {
  const product = productModels.getProductById(req.params.id);
  
  if (product) {
  
    res.render('productDetail', { vela: product });
  } else {
    res.status(404).render('error404'); 
  }
};


const getProductId = (req, res) => {
  const productId = [
    productModels.getProductById(),
    productModels.getProductById(),
    productModels.getProductById(),
    productModels.getProductById(),
    productModels.getProductById(),
    productModels.getProductById()

  ];

  res.render('index', { listaVelas:featuredProducts });
}

const getProductCategory = (req, res) => {

  const productCategory = productModels.getProductCat(req.params.cat);
  if (productCategory) {
    res.render('index', { listaVelas: products });
  } else {
    res.status(404).render('error404'); 
  }
}

const getProductHome = (req, res) => {

  const productFeatured = productModels.getProductFeatured();
    if (productFeatured) {
    res.render('index', { listaVelas: productFeatured});
  } else {
    res.status(404).render('error404'); 
  }
}
module.exports = {
  getAllProducts,
  getProductById,
  getProductCategory,
  getProductHome,
  
};