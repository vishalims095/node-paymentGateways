const express = require('express')
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('dotenv').config()
app.listen(process.env.PORT,() => {console.log("Paytm Server listening at",process.env.PORT)})