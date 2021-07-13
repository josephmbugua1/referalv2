const express=require('express');
const Router = express.Router();
const login = require("../controller/login");

Router.get("/login",login.getLogin)
Router.post("/login",login.postLogin)

module.exports = Router