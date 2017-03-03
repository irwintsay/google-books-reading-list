const router          = require('express').Router();
const AuthService     = require('../../services/authentication');
const controller      = require('./controller');

router.get('/', controller.index);
router.get('/home', AuthService.restrict, controller.home);

module.exports        = router;