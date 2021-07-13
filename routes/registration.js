const express=require('express');
const Router = express.Router();
const RegistrationPage = require('../controller/registration');

Router.get('/register',RegistrationPage.getRgPg);
Router.post('/register',RegistrationPage.postRgPg)

module.exports = Router;