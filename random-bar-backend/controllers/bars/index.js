const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.create);

router.delete('/:bar_id/:user_id', controller.destroy);

module.exports = router;
