module.exports = {
  registerForm(req, res) {
    return res.render("user/register")
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