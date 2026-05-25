

const getLoginPost = (req, res) => {
  const { email, password } = req.body;
  console.log('Intento de login recibido:', email);

  res.redirect('/');

} 


const getResetPassword = (req, res) => {
  res.render('pages/reset-password'); 
};

const resetPassword = (req, res) => {
  const { password } = req.body;
  console.log('Nueva contraseña:', password);
  res.send('Contraseña cambiada correctamente');
};

const recoverPassword = async (req, res) => {

  const { email } = req.body;
  res.send('Correo enviado correctamente a: ' + email);

};


module.exports = {
    
    getLoginPost
    , getResetPassword
    , resetPassword
    , recoverPassword

};