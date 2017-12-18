const express = require('express');
const router = express.Router();
const authenticationDB = require("../../../dbClient/authentication/authentication");

router.get('/', (req, res) => {
    req.logOut();
    res.render('logout', { layout: false })
})

module.exports = router;