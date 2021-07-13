const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "mail.javktest.goldlinebreeze.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "info@javktest.goldlinebreeze.com", // generated ethereal user
    pass: "Mukundijoe254", // generated ethereal password
  },
  tls:{
      rejectUnauthorized:false
    }
})
module.exports =transporter