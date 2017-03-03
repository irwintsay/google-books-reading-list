const router          = require('express').Router();
const AuthService     = require('../../services/authentication');

router.get('/', AuthService.restrict, (req, res) => res.json({test: 'successful'}))


module.exports        = router;