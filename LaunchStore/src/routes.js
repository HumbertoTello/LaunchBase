// HTTP
// GET: Receive RESOURCE (entity)
// POST: Create new RESOURCE with sent data
// PUT: Update RESOURCE
// DELETE: Delete RESOURCE

const express = require('express')
const routes = express.Router()

routes.get('/', function(req,res) {
  return res.send("ok")
})

module.exports = routes