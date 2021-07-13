const db =require('../functions/db')
const DB = db();
const confirmOtp = (email,otp,req,res)=>{
  const dbQuery = "SELECT * FROM users WHERE email = ?"
  const values = [email];
   DB.query(dbQuery, values,(error,results)=>{
    if(error){
      console.log(error)
    }
    results.forEach(result => {
      if (result.otp == otp ) {
        const dbQuery = "UPDATE users SET  emailConfirmation = ?"
        const values = [1];
        DB.query(dbQuery, values,(error,results)=>{
          if(error){
            console.log(error);
          }else{
            res.redirect("/dashboard")
          }
        })
      } else {
        res.redirect('/otp')
      }
    });
  });
}

module.exports = confirmOtp