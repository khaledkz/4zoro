const express = require('express');
const router = express.Router();
const articleDB = require('../../../dbClient/article');
const categoryDB = require('../../../dbClient/category');

/* GET home page. */
router.get('/add', (req, res) => {
  const query = req.body;
  callback = (categoryData) => {
    res.render('admin-add-article', {
      data: categoryData
    });
  }
  categoryDB.findCategory({}, callback)
})


router.post('/add', (req, res) => {
  const query = req.body;
  let translate = {};  
 
  if(query.arabic.length>0){
    translate.arabic = query.arabic; 
  }
  if(query.english.length>0){
    translate.english = query.english; 
  }
  if(query.amagrine.length>0){
    translate.amagrine = query.amagrine; 
  }
 
   query.translate = translate;

  callback = () => {
    res.redirect('/admin/articles/edit')
  }
  articleDB.addArticle(query, callback)
})

router.get('/edit', (req, res, next) => {
  callback = (data) => {
    data.map((x) => {
      let xWidth = x.fullContent.length;
      if (xWidth > 90) {
        x.fullContent = x.fullContent.slice(0, 90) + " ...";
      } else {
        x.fullContent = x.fullContent.slice(0, 90);

      }
    })
    res.render('admin-edit-article', {
      data: data
    });
  }
  articleDB.findArticle({}, callback);
});

router.get('/edit/delete/:articleId', (req, res, next) => {

  let { articleId } = req.params;

  callback = (data) => {
    res.render('delete-single-article', {
      data: data
    });
  }
  articleDB.findById(articleId, callback);

});
router.post('/edit/delete/:articleId', (req, res, next) => {
  let { articleId } = req.params;
  let title = req.body.title;
  let ensureTitle = req.body.ensureTitle;
  if (title === ensureTitle) {
    callback = () => {
      res.redirect('/admin/articles/edit')
    }
    articleDB.removeArticle(articleId, callback)
  } else {
    res.render('sorry-wrong-info')
  }
})


router.get('/edit/:articleId', (req, res) => {
  const { articleId } = req.params;

  categoryCallback = (categoryData) => {
    let articleCallback = (articleData) => {

      let CategorySelected = "";
      categoryData.map((x) => {
        if (x._id.equals(articleData.category)) {
          CategorySelected = x.title;
        }
      })

      console.log(CategorySelected);
      res.render('edit-sigle-article', {
        data: articleData,
        categoryData: categoryData,
        CategorySelected: CategorySelected
      });
    }
    articleDB.findById(articleId, articleCallback);
  }
  // articleDB.findById(articleId, callback);
  categoryDB.findCategory({}, categoryCallback)


})

router.post('/edit/:articleId', (req, res) => {
  let query = req.body;
  const { articleId } = req.params;
  callback = () => {
    res.redirect('/admin/articles/edit');
  }
  articleDB.updateOne(articleId, query, true, callback);
})
module.exports = router;