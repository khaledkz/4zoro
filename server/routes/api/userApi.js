const express = require('express');
const router = express.Router();
const articleDB = require('./../../dbClient/article');
const userDB = require('./../../dbClient/user');

 

    router.get('/', (req, res) => {
        let query=req.body;
       let callBack =(data)=>{
        res.json(data)
       }
        userDB.findUser(query,callBack)
        })
module.exports = router;