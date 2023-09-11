var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/author', function(_, res) {
  res.render('author', { author: "Jonatan Morales" })
});

module.exports = router;
