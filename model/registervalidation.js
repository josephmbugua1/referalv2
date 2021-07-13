const db =require('../functions/db')
const DB = db();
const insertUser = require("./insertuser")
const User = require('../class/users')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const registerUserUtil=require("../utils/registerUserUtil")

const validation = (req,res,body,otp,day)=>{
  const {username,email,phone,password,password2} = body
  const dbQuery = "SELECT * FROM users WHERE email = ?"
  const values = [email];
  DB.query(dbQuery,values,(err,results)=>{
    if(err){
      console.log(err)
    }else{
      if(results.length >0){
        res.redirect('/register');
      }else{
        const dbQuery = "SELECT * FROM users WHERE username = ?"
        const values = [username];
        DB.query(dbQuery, values,(err,results)=>{
          if(err){
            console.log(err);
          }else{
            if(results.length > 0){
              res.redirect("/register")
            }else{
              registerUserUtil(body,bcrypt,saltRounds,insertUser,User,req,res,otp,day)
            }
          }
        })
      }
    }
  })

}


module.exports=validation
