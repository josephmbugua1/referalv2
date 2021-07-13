const express=require('express');
const Router = express.Router();
const home = require("../controller/home");

Router.get("/",home.getHome)

module.exports = Router