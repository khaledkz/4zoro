const express = require('express');
const router = express.Router();
const articleDB=require('../../dbClient/article')


router.get('/',(req,res)=>{
    callback=(data)=>{
         res.json(data);
      }
      articleDB.findArticle({visible:true},callback);
})
module.exports = router;
