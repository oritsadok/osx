// functions to handle api calls
const Tenant = require('../models/TenantSchema')
const User = require('../models/UserSchema')
const jwt = require("jsonwebtoken")
const express = require("express");
const router = express.Router();
const logger = require('./logger');


// jwt config
const TokenConfing = {
    "secret": "oriforosx",
    "ttl": "1h"
}

// auth user 
exports.authenticate = function (req, res) {

    const userName = req.body.name
    const password = req.body.password
    try {
        User.findOne({ 'name': userName, 'password': password },
            function (err, response) {
                let result = {}
                if (err) {
                    // LOG IT
                    logger.info("invalid credentials")
                    result = {
                        error: "inccoret credantils",
                        status: 403
                    }
                    res.status(403).send(result)
                }
                // if exist send response+token
                else {
                    // createtoken from secret+useName/password
                    result["token"] = jwt.sign({ response }, TokenConfing.secret, { expiresIn: TokenConfing.ttl })
                    logger.info(userName + " seccessfuly logged in")
                    res.json(JSON.stringify(result))
                }
            }
        )
    }
    catch (error) {
        logger.info("a problem had occured while trying to query mongoDB")
        res.status(503).send(error)
    }
}

// for new tenant & update
router.post('/tenant', (req, res) => {
    const newTenant = new Tenant(req.body)
    newTenant.save()
    res.send()
})

//get tenants
router.get('/tenants', async function (req, res) {
    const tenants = await Tenant.find({})
    res.send(tenants)
})


//delete tenants
router.delete('/tenant/', function (req, res) {
    const tenantName = req.params.tenant
    Tenant.deleteOne({ name: tenantName }, function (err, person) {
        console.log(err)
    })
    res.end()
})

//update tenant

