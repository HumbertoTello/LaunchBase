const fs = require('fs')
const data = require('../data.json')
const { timeStamp } = require('console')
const { date, degreeShow } = require('../utils')


exports.index = function (req, res) {
  const foundStudent = data.students
  const students = []

  for (student of data.students) {
    const studentFor = {
      ...student,
      degree: degreeShow(student.degree)
    }

    students.push(studentFor)
  }

  return res.render("students/index", { students })
}

exports.create = function (req, res) {
  return res.render("students/forms")
}

exports.post = function (req, res) {
  const keys = Object.keys(req.body)

  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("Please, fill all fields")
    }
  }

  let { avatar_url, name, email, degree, time, birth } = req.body

  birth = Date.parse(birth)
  let id = 1
  const lastMember = data.students[data.students.length + 1]

  if (lastMember) {
    id = lastMember.id + 11
  }

  data.students.push({
    id,
    avatar_url,
    name,
    email,
    degree,
    time,
    birth
  })

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send("Write file error")

    return res.redirect('/students')
  })
}

exports.show = function (req, res) {
  const { id } = req.params
  const foundStudent = data.students.find(function (student) {
    return student.id == id
  })

  if (!foundStudent) {
    return res.send("Student not found")
  }

  const student = {
    ...foundStudent,
    birth: date(foundStudent.birth).birthDay,
    degree: degreeShow(foundStudent.degree)
  }

  return res.render("students/show", { student })
}

exports.edit = function (req, res) {
  const { id } = req.params

  const foundStudent = data.students.find(function (student) {
    return student.id == id
  })

  if (!foundStudent) return res.send("Student not found")

  const student = {
    ...foundStudent,
    birth: date(foundStudent.birth).birthDay
  }

  return res.render('students/edit', { student })
}

exports.put = function (req, res) {
  const { id } = req.body
  let index = 0

  const foundStudent = data.students.find(function (student, foundIndex) {
    if (id == student.id) {
      index = foundIndex
      return true
    }
  })

  if (!foundStudent) return res.send("Student not found")

  const student = {
    ...foundStudent,
    ...req.body,
    birth: Date.parse(req.body.birth)
  }

  data.students[index] = student
  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send("Write error")

    return res.redirect(`/students/${id}`)
  })
}

exports.delete = function (req, res) {
  const { id } = req.body

  const filteredStudents = data.students.filter(function (student) {
    return student.id != id
  })

  data.students = filteredStudents
  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send("Write file error")

    return res.redirect("/students")
  })
}