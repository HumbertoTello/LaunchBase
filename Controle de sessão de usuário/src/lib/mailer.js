const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6e219aa83b0aed",
    pass: "2fd24d8d7aac8c"
  }
});
