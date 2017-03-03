const router          = require('express').Router();
const controller      = require('./controller');

router.get('/googlebooks', controller.search);

module.exports        = router;