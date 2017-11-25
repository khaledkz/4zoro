var express = require('express');
var router = express.Router();

const articleDB= require('../dbClient/article')
const categoryDB= require('../dbClient/category')

/* GET home page. */
router.get('/', (req, res, next)=> {
  let callbac=()=>{
    res.return('/')
  }
  //articleDB({'title':'ali','fullContent':'ali is cool man'},callbac)
  categoryDB({'title':'celtic','shortDescription':'sportive'},callbac);
  res.render('index');
});

module.exports = router;
