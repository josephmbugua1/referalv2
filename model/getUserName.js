const db =require('../functions/db')
const DB = db();
const getUser = (email,req,res)=>{
  const dbQuery = "SELECT * FROM users WHERE email = ?"
  const values = [email];
   DB.query(dbQuery, values,(error,results)=>{
    if(error){
      console.log(error);
    }if(results.length >0){
      results.forEach(result=>{
        res.render("dashboard",{user:result})
      })
    }else{
      res.redirect("/login")
    }
  });
}



module.exports = getUser