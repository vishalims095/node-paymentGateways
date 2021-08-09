const express = require('express')
const route = express.Router()
const PaytmChecksum = require('./PaytmChecksum')
route.get('/',(req, res) =>{
    res.status(200).send({message : "Paytm route working"})
})


module.exports = route