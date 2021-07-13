const express=require('express');
const Router = express.Router();
const dashBoard = require("../controller/dashboard");

Router.get("/dashboard",dashBoard.getDashBoars)

module.exports = Router