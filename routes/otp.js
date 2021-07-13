const express=require('express');
const Router = express.Router();
const otp = require("../controller/otp")

Router.get('/otp', otp.getOtp)
Router.post('/otp', otp.postOtp)

module.exports = Router