const express = require("express");
const router = express.Router();
const api = require('./api')

// GET



// POST
router.post('/login', api.authenticate)




// router.post()








module.exports = router;
