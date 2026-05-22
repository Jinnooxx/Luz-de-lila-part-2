const productModels = require('../models/productModels');
const { get } = require('../routes/productRoutes');

const getAllProducts = (req, res) => {
  const products = productModels.getAllProducts();


  res.render('', { listaVelas: products });
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

  res.render('index', { listaVelas: featuredProducts });
};

const getProductCategory = (req, res) => {

  const products = productModels.getProductCat(req.params.cat);
  if (products && products.length > 0) {
    res.render('pages/index', { listaVelas: products });
  } else {
    res.status(404).render('error404');
  }
};

const getProductHome = (req, res) => {

  const productFeatured = productModels.getProductFeatured();
  if (productFeatured && productFeatured.length > 0) {
    res.render('pages/index', {
      listaVelas: productFeatured,
      esHome: true
    });
  } else {
    res.status(404).render('error404');
  }
};


const getContacto = (req, res) => {
  res.render('pages/contacto');
};


const getLogin = (req, res) => {
  res.render('pages/login');

};







module.exports = {
  getAllProducts,
  getProductById,
  getProductCategory,
  getProductHome,
  getContacto,
  getLogin,
  

};