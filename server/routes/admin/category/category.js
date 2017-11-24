var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/add', (req, res, next)=> {
  res.render('admin-add-category');
});

router.get('/edit', (req, res, next)=> {
  res.render('admin-edit-category');
});
module.exports = router;
