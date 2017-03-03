let controller          = {};

controller.index = (req, res) => {
  res.render('home/index');
};

controller.home = (req, res) => {
  res.render('home/home');
};

module.exports          = controller;