const express = require('express');
const router = express.Router();
const categoryDB = require('../../../dbClient/category')

/* GET home page. */
router.get('/add', (req, res, next) => {
  res.render('admin-add-category');
});

router.post('/add', (req, res) => {
  const query = req.body;
  callback = () => {
    res.redirect('/admin/categories/edit')
  }
  categoryDB.addCategory(query, callback)
})

router.get('/edit', (req, res, next) => {
  let callback = (data) => {
    data.map((x) => {
      let xWidth = x.shortDescription.length;
      if (xWidth > 90) {
        x.shortDescription = x.shortDescription.slice(0, 90) + " ...";
      } else {
        x.shortDescription = x.shortDescription.slice(0, 90);
      }
    })
    res.render('admin-edit-category', { data: data });
  }
  categoryDB.findCategory({}, callback);
});

router.get('/edit/:categoryId', (req, res, next) => {

  let { categoryId } = req.params;

  callback = (data) => {
     res.render('edit-single-category', {
      data: data
    });
  }
  categoryDB.findById(categoryId, callback);

});

router.post('/edit/:categoryId', (req, res, next) => {
  const { categoryId } = req.params;
  const queryUpdated = req.body;

  callback = () => {
    res.redirect('/admin/categories/edit');
  }
  categoryDB.updateOne(categoryId, queryUpdated, true, callback)
});

router.get('/edit/delete/:categoryId', (req, res, next) => {
  const { categoryId } = req.params;
  // callback = () => {
  //   res.redirect('/admin/categories/edit');
  // }
  // categoryDB.removeCategory(categoryId, callback)
    callback = (data) => {
       res.render('delete-single-category',{data});
    }
    categoryDB.findById(categoryId, callback);

});

router.post('/edit/delete/:categoryId', (req, res, next) => {
  const { categoryId } = req.params;
  let title=req.body.title;
  let ensureTitle=req.body.ensureTitle;
  if(title==ensureTitle){
    callback = () => {
      res.redirect('/admin/categories/edit');
    }
    categoryDB.removeCategory(categoryId, callback)
  }else{
    res.render('sorry-wrong-info')
  }
 
   
});
module.exports = router;