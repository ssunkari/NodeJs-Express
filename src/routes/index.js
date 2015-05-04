var router = require('express').Router();
var home = require('../controllers/home');
var posts = require('../controllers/posts');

var getPost = require('../lib/getPost');



/* GET home page. */
router.get('/', home);


//Adding Route For posts using router Params
router.get('/post/:postName',posts.get);

module.exports = router;
