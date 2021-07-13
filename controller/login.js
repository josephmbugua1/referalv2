
const confirmUserActive = require("../model/confirmLogin")
exports.getLogin=(req,res)=>{
  res.render("page-login");
}
exports.postLogin=(req,res)=>{
  const {email,password}=req.body;
  confirmUserActive(email,password,req,res)
}