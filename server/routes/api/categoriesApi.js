const express = require('express');
const router = express.Router();
const categoryDB = require('../../dbClient/category')
const articleDB = require('../../dbClient/article')


router.get('/', (req, res) => {
    callback = (data) => {
        res.json(data);
    }
    categoryDB.findCategory({ visible: true }, callback);
})

router.get('/:catId', (req, res) => {
    let { catId } = req.params;

    callback = (data) => {
        res.json(data);
    }
    articleDB.findArticle({ visible: true, category: catId }, callback);
})


module.exports = router;
