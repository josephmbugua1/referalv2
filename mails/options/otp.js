const registerOptions = (email,fullname,otp)=>{
  let options = {
      from:'"info javktest" <info@javktest.goldlinebreeze.com>',
      to: email,
      subject: "Confirm Email",
      html: `<p><b>Congratulations and welcome on board ${fullname}</b>🎉🎉🙌<br>.Your one time pin is ${otp}.We first want to welcome you to our community<br>`,
  }
  return options
}
module.exports = registerOptions