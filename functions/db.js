const mysql = require('mysql');
const dbConnection =()=>{
  const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"johndb"
  })
  db.connect((error)=>{
    if(error){
      console.log(error)
    }else{
      console.log("success");
    }
  })
  return db
}

module.exports=dbConnection