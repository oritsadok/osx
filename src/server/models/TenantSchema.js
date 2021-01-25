const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tenantSchema = new Schema({
    name: String,
    Phone: Number,
    adress: String,
    debt: Number
})

const Tenant = mongoose.model("tenant", tenantSchema)
module.exports = Tenant
