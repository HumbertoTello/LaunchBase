const express = require('express')
const routes = express.Router()
const teachers = require('./teachers')
const { get } = require('browser-sync')

routes.get('/', function(req,res) {
  return res.redirect("/teachers")
})

routes.get('/teachers/create', function(req, res) {
  return res.render("teachers/forms")
})

routes.get('/teachers', teachers.index)

routes.get('/teachers/:id', teachers.show)

routes.get('/teachers/:id/edit', teachers.edit)

routes.post('/teachers', teachers.post)

routes.put("/teachers", teachers.put)

routes.delete("/teachers", teachers.delete)

module.exports = routes