const fs = require('fs')
const data = require('./data.json')
const { timeStamp } = require('console')
const { age, date } = require('./utils')

exports.post = function(req, res) {
  const keys = Object.keys(req.body)

  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("Please, fill all fields")
    }
  }

  let {avatar_url, name, birth, degree, classType, subject} = req.body

  birth = Date.parse(birth)
  const created_at = Date.now()
  const id = Number(data.teachers.length + 1)

  data.teachers.push({
    id,
    avatar_url,
    name,
    birth,
    degree,
    classType,
    subject,
    created_at
  })

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write file error")

    return res.redirect('/teachers')
  })
}

exports.show = function(req, res) {
  const { id } = req.params
  const foundTeacher = data.teachers.find(function(teacher) {
    return teacher.id == id
  })

  if (!foundTeacher) {
    return res.send("Teacher not found")
  }

  const teacher = {
    ...foundTeacher,
    subject: foundTeacher.subject.split(','),
    created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at),
    birth: age(foundTeacher.birth)
  }

  return res.render("teachers/show", { teacher })
}

exports.edit = function(req, res) {
  const { id } = req.params

  const foundTeacher = data.teachers.find(function(teacher) {
    return teacher.id == id
  })

  if (!foundTeacher) return res.send("Teacher not found")

  const teacher = {
    ...foundTeacher,
    birth: date(foundTeacher.birth)
  }

  return res.render('teachers/edit', { teacher })
}