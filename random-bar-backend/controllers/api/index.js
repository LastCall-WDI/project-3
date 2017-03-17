const router = require('express').Router();

const controller = require('./controller.js');

router.get('/:lat/:lng', controller.randomizer);

module.exports = router;
