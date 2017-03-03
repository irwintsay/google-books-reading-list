const router          = require('express').Router();

router.use('/', require('./controllers/home'));
router.use('/users', require('./controllers/users'));
router.use('/books', require('./controllers/books'));
router.use('/api', require('./controllers/api'));

module.exports        = router;