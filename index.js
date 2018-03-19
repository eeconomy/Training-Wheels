console.log("Adam's Awesome Atom Program")

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  console.log(req)
  res.send('Hello World')
})

app.get('/hello', function(req, res) {
  var ipMessage = "I know your IP is:"+req.ip
  var jsonResponse = {}
  jsonResponse.message = "HOLA< AMIGO!@"
  console.log()
  res.send(jsonResponse)


})


app.listen(3000)
