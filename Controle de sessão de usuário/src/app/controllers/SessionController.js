module.exports = {
  loginForm(req, res) {
    return res.render("session/login")
  },
  login(req, res) {
    // verificar se o usuário está cadastrado
    req.session.userId = req.user.id

    return res.redirect("/users")
    // verificar se o password bate

    // colocar o usuário no req.session (deixar logado)
  },
  logout(req, res) {
    req.session.destroy()
    return res.redirect("/")
  },
  forgotForm (req, res) {
    return res.render("session/forgot-password")
  },
  forgot(req, res) {
    
  }
}