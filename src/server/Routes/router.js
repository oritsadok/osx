const express = require("express");
const router = express.Router();
const api = require('./api')
const utiles = require('./utiles')


// GET
router.get('/test', utiles.validateToken, api.test)
router.get('/get_tenants', utiles.validateToken, api.getAllTenants)



// POST
router.post('/login', api.authenticate)
router.post('/create_tenant', utiles.validateToken, api.createNewTenant)
router.post('/logout', api.logout)



// DELETE
router.delete('/create_tenant', utiles.validateToken, api.removeTenant)




module.exports = router;
