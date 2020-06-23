const fs = require('fs') // File system node

// create
exports.post = function(req,res) {
  const keys = Object.keys(req.body)

  //req.body
  //{"avatar_url":"http://google.com","name":"Jéssica","birth":"1994-02-12","gender":"F","services":"Ciclismo"}
  
  //req.keys
  //["avatar_url","name","birth","gender","services"]

  for (key of keys) {

    // req.body.key == ""
    if (req.body[key] == "") {
      return res.send('Please, fill all fields')
    }
  }
  
  fs.writeFile("data.json", JSON.stringify(req.body), function(err) {
    if (err) {
      return res.send("Write file error")
    }

    return res.redirect("/instructors")
  })

  // return res.send(req.body)
}

// update

// delete