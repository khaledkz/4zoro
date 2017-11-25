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

module.exports = router;
