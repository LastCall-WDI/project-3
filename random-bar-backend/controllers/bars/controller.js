const Bar = require('../../models/bar');

const controller = {};

controller.create = (req, res) => {
  Bar
  .addToFavorites(req.body.bar)
  .then((data) => {
    res.sendStatus(201);
  })
  .catch((err) => {
    console.log('ERROR', err)
  });
}

controller.destroy = (req, res) => {
  Bar
  .delete(req.params.bar_id, req.params.user_id)
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log('ERROR', err);
  })
}

module.exports = controller;
