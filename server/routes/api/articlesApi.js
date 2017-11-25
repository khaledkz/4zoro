const express = require('express');
const router = express.Router();
const articleDB=require('../../dbClient/article')


router.get('/',(req,res)=>{
    callback=(data)=>{
        console.log(data)
        res.json(data);
      }
      articleDB.findArticle({},callback);
})
module.exports = router;
