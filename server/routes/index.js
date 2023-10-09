const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Escuela', author: 'Jonatan Morales' });
});

module.exports = router;
