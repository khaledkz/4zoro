const express = require('express');
const router = express.Router();
const articleDB = require('../../../dbClient/article');
const userDB = require('../../../dbClient/user');

router.get('/', (req, res) => {
    res.render('create-user')
    })

    router.post('/', (req, res) => {
        console.log(req.body)
       let query=req.body;
       let callBack =()=>{
        res.redirect('/')
       }
        userDB.addUser(query,callBack)
        })
module.exports = router;