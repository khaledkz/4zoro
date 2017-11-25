var express = require('express');
var router = express.Router();
const addArticle=require('../../../dbClient/article')
/* GET home page. */
router.get('/add', (req, res, next)=> {
  res.render('admin-add-article');
});

router.post('/add',(req,res)=>{
   const query=req.body;
   callback=()=>{
     res.redirect('/')
   }
  addArticle.addArticle(query,callback)
 })

router.get('/edit', (req, res, next)=> {
  res.render('admin-edit-article');
});
module.exports = router;
