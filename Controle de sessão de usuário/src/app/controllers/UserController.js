const User = require('../models/User')
const { formatCep, formatCpfCnpj } = require('../../lib/utils')

module.exports = {
  registerForm(req, res) {
    return res.render("user/register")
  },
  async show(req, res) {
    const { user } = req

    user.cpf_cnpj = formatCpfCnpj(user.cpf_cnpj)
    user.cep = formatCep(user.cep)

    return res.render("user/index", { user })
  },
  async post(req, res) {

    const userId = await User.create(req.body)

    req.session.userId = userId

    return res.redirect('/users')
  },
  async update(req, res) {
    try {
      const { user } = req
      let { name, email, cpf_cnpj, cep, address } = req.body

      cpf_cnpj = cpf_cnpj.replace(/\D/g, "")
      cep = cep.replace(/\D/g, "")

      await User.update(user.id, {
        name,
        email,
        cpf_cnpj,
        cep,
        address
      })

      return res.render("user/index", {
        user: req.body,
        success: "Conta atualizada com sucesso"
      })

    } catch(err) {
      console.error(err)
      return res.render("users/index", {
        error: "Algum erro aconteceu"
      })
    }
  },
  async delete(req, res) {
    try {
      await User.delete(req.body.id)
      req.session.destroy()

      return res.render("session/login", {
        success: "Conta deletada com sucesso!"
      })
    } catch(err) {
      console.error(err)
      return res.render("user/index", {
        user: req.body,
        error: "Erro ao tentar deletar sua conta!"
      })
    }
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