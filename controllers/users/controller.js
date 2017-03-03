const bcrypt        = require('bcrypt');
const jwt           = require('jsonwebtoken');

const User          = require('../../models/user');

let controller      = {};

controller.create = (req, res) => {
  User
  .create(req.body.user)
  .then(response => res.json(response))
  .catch(err => res.status(400).json(err));
};

controller.login = (req, res) => {
  console.log(req.body);
  User
  .findByEmail(req.body.email)
  .then(user => {
    if(user) {
      const isAuthed = bcrypt.compareSync(req.body.password, user.password_digest);
      if(isAuthed) {
        const token = jwt.sign({email: user.email}, 'tom brady goat', {expiresIn: '7d'});
        res.json({token: token});
        // res.redirect('/home');
      } else {
        res.sendStatus(401);
      }
    } else {
      res.status(404).json({error: 'User not found'});
    }
  })
  .catch(err => res.status(400).json(err));
};

module.exports      = controller;
