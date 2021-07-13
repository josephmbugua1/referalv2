const getUser= require("../model/getUserName")
exports.getDashBoars = (req,res)=>{
  const sessionEmail = req.session.email
  if (!sessionEmail){
    res.redirect('/register')
  }else{
    getUser(sessionEmail,req,res)
  }
}