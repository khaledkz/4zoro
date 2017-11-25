const express = require('express');
const router = express.Router();
const addCategory=require('../../../dbClient/category')

/* GET home page. */
router.get('/add', (req, res, next)=> {
  res.render('admin-add-category');
});

router.post('/add',(req,res)=>{
  const query=req.body;
  callback=()=>{
    res.redirect('/')
  }
  addCategory.addCategory(query,callback)
  res.redirect('/')
})

router.get('/edit', (req, res, next)=> {
  res.render('admin-edit-category');
});

module.exports = router;
