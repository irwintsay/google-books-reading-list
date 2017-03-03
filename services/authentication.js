const jwt             = require('jsonwebtoken');
let AuthService       = {};

AuthService.restrict = (req, res, next) => {
  if(req.headers['authorization']) {
    jwt.verify(req.headers['authorization'], 'tom brady goat', (err, payload) => {
      if(!err) {
        req.user = payload;
        next();
      } else {
        res.status(401).json({error: 'Invalid token'});
      }
    });
  } else {
    res.status(401).json({error: 'Please provide a token'});
  }
};

module.exports        = AuthService;