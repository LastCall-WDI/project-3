const router      = require('express').Router();
const AuthService = require('../../services/auth');
const controller  = require('./controller');

// GET Routes

router.get('/', controller.index);

router.get('/new', controller.new);

router.get('/dashboard', controller.authorizeToken);

// POST Routes

router.post('/login', controller.login);

router.post('/signup', controller.create);

module.exports = router;
