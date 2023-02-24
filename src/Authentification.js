//Authentification simple
function isAuth(req, res, next) {
    const auth = req.headers.authorization;
    if (auth === 'Rocket') {
      next();
    } else {
      res.status(401);
      res.send('Accès interdit');
    }
  };

  module.exports= isAuth;
  