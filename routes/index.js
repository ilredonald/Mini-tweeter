const router = require('express').Router();
const { ensureAuthenticated } = require('../config/guards.config');
const tweets = require('./tweets.routes');
const users = require('./users.routes');
const auth = require('./auth.routes');

router.use('/tweets', ensureAuthenticated, tweets);
router.use('/auth', auth);
router.use('/users', users);

router.get('/', (req, res) => {
  res.redirect('/tweets');
})
module.exports = router;