class User {
  constructor(username,email,password,phone,otp,day){
    this.username = username;
    this.password = password;
    this.email = email;
    this.phone = phone
    this.otp = otp;
    this.date = day;
  }

  static passComparison (pass1,pass2){
    if(pass1!=pass2){
      return false;
    }else{
      return true
    }
  }
}

module.exports = User;