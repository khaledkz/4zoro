const express = require('express');
const router = express.Router();
const articleDB=require('../../../dbClient/article')
/* GET home page. */
router.get('/add', (req, res, next)=> {
  res.render('admin-add-article');
});

router.post('/add',(req,res)=>{
   const query=req.body;
   callback=()=>{
     res.redirect('/')
   }
   articleDB.addArticle(query,callback)
 })

router.get('/edit', (req, res, next)=> {
  callback=(data)=>{
    res.render('admin-edit-article',{
      data:data
    });
  }
  articleDB.findArticle({},callback);
});

router.get('/edit/delete/:articleId', (req, res, next)=> {
  let {articleId}=req.params;
  callback=()=>{
    res.redirect('/')
  }
 articleDB.removeArticle(articleId,callback)
});


router.get('/edit/:articleId',(req,res)=>{
  const {articleId}=req.params;

  callback=(data)=>{
      console.log(data)
      res.render('edit-sigle-article',{
        data:data
      });
    }
    articleDB.findById(articleId,callback);
})

router.post('/edit/:articleId',(req,res)=>{
  let query=req.body;
   
  const {articleId}=req.params;

  callback=()=>{
       res.redirect('/');
    }
    articleDB.updateOne(articleId,query,true,callback);
})
module.exports = router;