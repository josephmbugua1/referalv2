const registerMail  = require("../mails/sendmail")
const registeruserUtil=(body,bcrypt,saltRounds,insertUser,User,req,res,otp,day)=>{
  const {username,email,phone,password,password2} = body
  bcrypt.hash(password,saltRounds,(err,hash)=>{
    if(err){
      console.log(err)
    }
    newUser =  new User (username,email,hash,phone,otp,day)
    insertUser(newUser);
    registerMail(email,username,otp)
    const session = req.session;
    session.email = email;
    res.redirect('/otp');
  })
}

module.exports=registeruserUtil