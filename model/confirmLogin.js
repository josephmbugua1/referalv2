const db =require('../functions/db')
const DB = db();
const registerMail = require("../mails/sendmail")
const bcrypt= require("bcrypt")
const saltRounds = 10;
const confirmUserActive = (email,password,req,res)=>{
      const dbQuery = "SELECT * FROM users WHERE email = ?"
      const values = [email];
       DB.query(dbQuery, values,(error,results)=>{
        if(error){
          console.log(error);
        }else{
          if(results.length > 0){
          results.forEach(result => {

            if(result.emailConfirmation == 1){
              // Load hash from your password DB.
              bcrypt.compare(password, result.password, function(err, result2) {
                if(err){
                  console.log(err);
                }else{
                  if(result2){
                    const session =req.session;
                    session.email = result.email;
                    res.redirect("/dashboard")
                  }else{
                    req.flash("message","Wrong Password")
                    res.redirect("/login");
                  }
                }
              // result == true
              });
            }else{
              registerMail(result.email,result.username,result.otp)
              req.flash("message","Please confirm the pin sent to your email")
              res.redirect("/otp");
            }
          });
        
      }else{
        res.flash("message","User does not exist")
        res.redirect("/login")
      }
    }
    })
  }

module.exports = confirmUserActive;

