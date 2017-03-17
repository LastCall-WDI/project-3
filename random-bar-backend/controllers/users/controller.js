const bcrypt = require('bcrypt');
const jwt    = require('jsonwebtoken');

const User = require('../../models/user');
const Bar = require('../../models/bar');

const controller = {};

controller.index = (req, res) => {
  User
    .findAll()
    .then((data) => res.json({ user: data }))
    .catch((err) => console.log('ERROR', err));
};

controller.new = (req, res) => {
  res.render('users/new');
};

controller.authorizeToken = (req, res) => {

  jwt.verify(req.headers.authorization, "taco cat", (err, decoded) => {
    if (err) {
      console.log('one');
      res
      .status(401)
      .json({ error: err.message });
    } else {
      // pass favorite bars to dashboard page here
      Bar
        .findByUserEmail(decoded.email)
        .then((data) => {
          res.json({
            data: data,
            user_id: decoded.user_id
          });
        })
        .catch((err) => {
          console.log('ERROR', err);
        })
      console.log('two', decoded);
      // res.json({ message: "This is restricted content coming from the Node Server."})
    }
  });
}

controller.show = (req, res) => {
  User
    .findById(req.params.id)
    .then((data) => {
      res.render('users/show', { users: data });
      console.log(data);
    })
    .catch((err) => console.log('ERROR', err));
};

controller.create = (req, res) => {
  console.log('req body in controller', req.body)
  User
    .create(req.body.user)
    .then((data) => {
      console.log('data in controller', data)
      res.status(201)
      .json({ user: data })
    })
    .catch(err => console.log('ERROR', err));
};

controller.login = (req, res) => {
  User
    .findByEmail(req.body.user.email)
    .then((user) => {
      // if user exists
      if (user) {
        // compare password with hashed password - will return boolean
        const isAuthed = bcrypt.compareSync(req.body.user.password, user.password_digest);
        if (isAuthed) {
          // create JWT with email from user record with options
          const token = jwt.sign({
            email : user.email,
            user_id: user.id
          }, 'taco cat', { expiresIn: '7d' });
          // respond with token
          res.json({ token });
        } else {
          // else send user back to login view
          res.sendStatus(401);
        }
      } else {
        res.status(404)
        .json({ error: "No user found "});
      }
    });
}

// credit to Dan Pease who helped us to pass the jwt properly when a user is created and logs in


module.exports = controller;
