var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
  let callbac=()=>{
    res.return('/')
  }
    res.render('index');
});

module.exports = router;
