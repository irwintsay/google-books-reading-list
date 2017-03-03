const GoogleBooks         = require('../../services/books-api');

let controller            = {};

controller.search = (req, res) => {
  GoogleBooks
  .search(req.query.q)
  .then(r => r.json())
  .then(response => {
    res.json(response);
  });
};

module.exports            = controller;