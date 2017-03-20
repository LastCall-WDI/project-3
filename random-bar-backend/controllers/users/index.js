const router      = require('express').Router();
const controller  = require('./controller');

// GET Routes
router.get('/dashboard', controller.authorizeToken);

// POST Routes
router.post('/login', controller.login);
router.post('/signup', controller.create);

module.exports = router;
