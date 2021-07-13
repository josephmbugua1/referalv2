const db =require('../functions/db')
const DB = db();
const insertdata = async(user)=>{
  const dbQuery = "INSERT INTO users(username, phone, email, password, date, otp) VALUES(?,?,?,?,?,?)"
  const values = [user.username,user.phone,user.email,user.password,user.date,user.otp];
 await DB.query(dbQuery, values,(error,data)=>{
    if(error){
      console.log(error)
    }else{
      console.log("data inserted");
    }
  })
}

module.exports = insertdata;