const User = require('../models/User')

module.exports = {
  registerForm(req, res) {
    return res.render("user/register")
  },
  async post(req, res) {
    //check if has all fields
    const keys = Object.keys(req.body)

    for (key of keys) {
      if(req.body[key] == "") {
        return res.send("Please, fill all fields")
      }
    }

    //check if user exists [email, cpf_cnpj]
    let { email, cpf_cnpj, password, passwordRepeat } = req.body
   
    cpf_cnpj = cpf_cnpj.replace(/\D/g, "")

    const user = await User.findOne({
      where: {email},
      or: {cpf_cnpj}
    })
    if(user) return res.send('User already exists')

    //check if password match
    if (password != passwordRepeat)
      return res.send('Password mismatch')

    return res.send('Passed!')
  }
}
// class Person {
//   getName() {
//     return this.name
//   }
// }

// class Dev extends Person {
//   constructor(name) {
//     super()
//     this.name = name
//   }
// }

// const dev = new Dev("diego")
// console.log(dev.getName())

// class UserController {
//   registerForm(req, res) {
//     return res.redirect("/produtos")
//   }
// }

// module.exports = new UserController()


// ECMAScript 6
// const, let
// template literals `strings`
// spread operators - shorthand { ...objeto } - [ ...array ]
// shorthand { a() }
// arrow function () => {}

// class UserController {
//   constructor(name, address) {
//     this.name = name
//     this.address = address
//   }

//   getNameAddress() {
//     return this.name + this.address
//   }
// }

// const user1 = new UserController("Mayk ", " Rua X")
// console.log(user1.name)

// const user2 = new UserController("Douglas ", " Rua Y")
// console.log(user2.getNameAddress())