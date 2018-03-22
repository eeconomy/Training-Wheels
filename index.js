console.log("Adam's Awesome Atom Program")

var express = require('express')
var app = express()
var math = require('mathjs')

app.get('/', function (req, res) {
  console.log(req)
  res.send('Hello World')
})

app.get('/IotaSeed', function(req, res) {
  var seedIp = "Someone grabbed a seed from IP:"+req.ip
  var seedResponse = {}
  var seed = ""
  var switcher = "9ABCDEFGHIJKLMNOPQURSTUVWXYZ"
  for(i = 0;i<81;i++){
    seed = seed+switcher[math.floor(math.random()*27)]
  }

  seedResponse.message = "Your Seed is:"
  console.log(seedIp)
  console.log("They got this seed: "+seed)
  //res.send(seedResponse.message)
  res.send(seedResponse.message+seed)


})



app.listen(3000)
