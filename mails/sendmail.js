const registerOptions = require("./options/otp")
const transporter = require("./transporter")
const registerMail = (email, username, otp) => {
  transporter.sendMail(
    registerOptions(email, username, otp),
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Success ${data}`);
      }
    }
  );
};

module.exports = registerMail;