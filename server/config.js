const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
dotenv.config()

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email,
    pass: process.env.pass
  }
})

module.exports = transporter;