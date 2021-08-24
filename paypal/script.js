const express = require('express')
var bodyParser = require('body-parser')
var path = require("path");

const app = express()
app.use(express.static(path.join(__dirname, "views")));

// app.use(__dirname , "/index.html")
// app.get('/',(req, res) =>{
//     res.sendFile(__dirname + "/index.html");
// })

app.listen(3000,() => {console.log("paypal Server listening at 3000")})
