const otpGen = require('../functions/otpGen')
const User = require('../class/users')
const date = require("../utils/date")
const validation = require("../model/registervalidation")
let newUser;
exports.getRgPg = (req,res)=>{
  res.render("page-register")
}
exports.postRgPg= (req,res)=>{
  const {username,email,phone,password,password2} = req.body
  const otp = otpGen();
  const day = date();
  const status = User.passComparison(password,password2);
  if(status){
    validation(req,res,req.body,otp,day);
  }else{
  }
}
