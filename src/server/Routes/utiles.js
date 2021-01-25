const jwt = require("jsonwebtoken")
const config = require('config')
const tokanConfig = config.get('TokenConfing')

module.exports = {

    // Token validation middleware
    validateToken: (req, res, next) => {
        const token = req.headers.authorization;
        let result;
        if (token) {
            try {
                result = jwt.verify(token, tokanConfig.secret);
                // Success
                // pass back the decoded token to the request object
                req.decoded = result;
                // We call next to pass execution to the subsequent middleware
                next();
            } catch (err) {
                // catch and log an error for jwt.verify invalid token
                result = {
                    error: 'Unauthorized token',
                    status: 403
                };
                res.status(403).send(result);
            }
        } else {
            result = {
                error: 'Authentication error. Token required.',
                status: 401
            };
            res.status(401).send(result);
        }
    }

};