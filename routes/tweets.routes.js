const router = require('express').Router();
const { tweetCreate, tweetList, tweetNew, tweetDelete, tweetEdit, tweetUpdate} = require('../controllers/tweets.controller');

router.get('/', tweetList);
router.get('/new', tweetNew);
router.post('/', tweetCreate);
router.post('/update/:tweetId', tweetUpdate);
router.get('/edit/:tweetId', tweetEdit);
router.delete('/:tweetId', tweetDelete);

module.exports = router;