var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/add', (req, res, next)=> {
  res.render('admin-add-article');
});

router.get('/edit', (req, res, next)=> {
  res.render('admin-edit-article');
});
module.exports = router;
