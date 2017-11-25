const express = require('express');
const router = express.Router();
const categoryDB=require('../../dbClient/category')


router.get('/',(req,res)=>{
    callback=(data)=>{
        console.log(data)
        res.json(data);
      }
      categoryDB.findCategory({},callback);
})
module.exports = router;