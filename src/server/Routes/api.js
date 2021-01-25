// functions to handle api calls
const Tenant = require('../models/TenantSchema')
const User = require('../models/UserSchema')
const jwt = require("jsonwebtoken")
const logger = require('./logger');
const config = require('config')
const tokanConfig = config.get('TokenConfing')


/* GET */

// test function 
exports.test = function (req, res) {

    console.log("WE PASSED VSLIDATION. SENDING YES BACK")
    res.send("YES")

}

// get all tenants
exports.getAllTenants = function (req, res) {
    // TODO
}


/* POST */

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
                    result["token"] = jwt.sign({ response }, tokanConfig.secret, { expiresIn: tokanConfig.ttl })
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

// log the logout 
exports.logout = function (req, res) {
    const userName = req.body.name
    logger.info(userName + " logged out")
    res.end()
}


// add new tenant
exports.createNewTenant = function (req, res) {
    // TODO
}




/* DELETE */

// get all tenants
exports.removeTenant = function (req, res) {
    // TODO
}







