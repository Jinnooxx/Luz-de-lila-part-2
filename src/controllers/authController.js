





const getLoginPost = (req, res) => {
  const { email, password } = req.body;
  console.log('Intento de login recibido:', email);

  res.redirect('/');

} 


module.exports = {
    
    getLoginPost

};