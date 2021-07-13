const confirmOtp = require("../model/confirmOtp")
exports.getOtp= (req,res)=>{
  const session = req.session;
  if(session.email){
    res.render('otp')
  }else{
    res.redirect("/register")
  }
}

exports.postOtp = (req,res)=>{
  const session = req.session;
  if(session.email){
    const {otp}= req.body;
    confirmOtp(session.email,otp,req,res)
  }else{
    res.redirect("/register")
  }
}