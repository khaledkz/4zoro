const express = require('express');
const router = express.Router();
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
  callback=(data)=>{
    console.log(data)
    res.render('admin-edit-article',{
      data:data
    });
  }
 addArticle.findArticle({},callback);
});
module.exports = router;