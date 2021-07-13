const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const RegPage = require('./routes/registration')
const cookieParser = require("cookie-parser")
const session = require("express-session");
const db = require('./functions/db')
const dashboard = require("./routes/dashboard")
const otp = require("./routes/otp")
const login= require("./routes/login")
const flash = require("flash")
const home = require("./routes/home")

//middleware
app.set('view engine',"ejs");
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({
  secret:"shh this is our litle secret",
  resave: true,
  saveUninitialized:false,
}))
app.use(flash())
//end middleware
//db
db()
//enddb

app.use(home)
app.use(RegPage);
app.use(dashboard)
app.use(otp)
app.use(login);
const port=process.env.PORT||3000
app.listen(port, ()=>{
  console.log(`we are live a port ${port}`);
})