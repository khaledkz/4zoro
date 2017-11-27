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
     res.redirect('/admin/articles/edit')
   }
   articleDB.addArticle(query,callback)
 })

router.get('/edit', (req, res, next)=> {
  callback=(data)=>{
    data.map((x)=>{
      let xWidth=x.fullContent.length;
      if(xWidth>90){
        x.fullContent=x.fullContent.slice(0, 90)+" ...";
      }else{
        x.fullContent=x.fullContent.slice(0, 90);
        
      }
    })
    res.render('admin-edit-article',{
      data:data
    });
  }
  articleDB.findArticle({},callback);
});

router.get('/edit/delete/:articleId', (req, res, next)=> {

  let {articleId}=req.params;
  
callback=(data)=>{
   res.render('delete-single-article',{
    data:data
  });
}
articleDB.findById(articleId,callback);

});
router.post('/edit/delete/:articleId',(req,res,next)=>{
  let {articleId}=req.params; 
   let title=req.body.title;
  let ensureTitle=req.body.ensureTitle;
  if(title==ensureTitle){
   callback=()=>{
    res.redirect('/admin/articles/edit')
  }
   articleDB.removeArticle(articleId,callback)
  }else{
    res.render('sorry-wrong-info')     
  }
})


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
  console.log(query); 
  
  const {articleId}=req.params;

  callback=()=>{
       res.redirect('/admin/articles/edit');
    }
    articleDB.updateOne(articleId,query,true,callback);
})
module.exports = router;