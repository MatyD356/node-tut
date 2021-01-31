const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
})

const mailOptions = {
  from: '',
  to: 'matyd356@gmail.com',
  subject: 'email using node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
}

transporter.sendMail(mailOptions, (err, info) => {
  if (err) console.log(err)
  else console.log('Email sent: ' + info.response)
})