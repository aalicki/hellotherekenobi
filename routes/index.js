var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kenobi vs. Greivous', jedi_name: 'General Kenobi' });
});

module.exports = router;