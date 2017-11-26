const express = require('express');
const router = express.Router();
const categoryDB=require('../../../dbClient/category')

/* GET home page. */
router.get('/add', (req, res, next)=> {
  res.render('admin-add-category');
});

router.post('/add',(req,res)=>{
  const query=req.body;
  callback=()=>{
    res.redirect('/')
  }
  categoryDB.addCategory(query,callback)
  res.redirect('/')
})

router.get('/edit', (req, res, next)=> {
  let callback=(data)=>{
    res.render('admin-edit-category',{data:data});    
  }
  categoryDB.findCategory({},callback);
});

router.get('/edit/:categoryId', (req, res, next)=> {

let {categoryId}=req.params;  
 
 callback=(data)=>{
  console.log(data)
  res.render('edit-single-category',{
    data:data
  });
}
 categoryDB.findById(categoryId,callback);

});

router.post('/edit/:categoryId',(req,res,next)=>{
  const {categoryId}=req.params;  
  const queryUpdated=req.body;

  callback=()=>{
    res.redirect('/');
  }
 categoryDB.updateOne(categoryId,queryUpdated,true,callback)
});

router.get('/edit/delete/:categoryId',(req,res,next)=>{
  const {categoryId}=req.params; 
   callback=()=>{
    res.redirect('/');
  }
  categoryDB.removeCategory(categoryId,callback)
});  
module.exports = router;