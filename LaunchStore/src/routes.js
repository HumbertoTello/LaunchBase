// HTTP
// GET: Receive RESOURCE (entity)
// POST: Create new RESOURCE with sent data
// PUT: Update RESOURCE
// DELETE: Delete RESOURCE

const express = require('express')
const routes = express.Router()
const ProductControler = require('./app/controllers/ProductController')

routes.get('/', function(req,res) {
  return res.render("layout.njk")
})

routes.get('/products/create', ProductControler.create)

routes.get('ads/create', function(req,res) {
  return res.redirect("/products/create")
})

module.exports = routes