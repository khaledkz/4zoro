const express = require('express');
const router = express.Router();
const authenticationDB=require("../../../dbClient/authentication/authentication");

router.get('/',(req,res)=>{
        res.render('login',{layout:false})
})
 module.exports = router;