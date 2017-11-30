const express = require('express');
const router = express.Router();
const articleDB = require('../../dbClient/article')


router.get('/', (req, res) => {
    callback = (data) => {
        res.json(data);
    }
    articleDB.findArticle({ visible: true }, callback);
})

router.get('/:articleId', (req, res) => {
    let { articleId } = req.params;

    callback = (data) => {
        res.json(data);
    }
    articleDB.findById(articleId, callback);
})

module.exports = router;
