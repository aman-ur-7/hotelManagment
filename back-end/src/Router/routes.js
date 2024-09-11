const express = require("express");
const Router = express.Router();

const { REGISTER_USER } = require("../controllers/user");

Router.post("/create", REGISTER_USER);

module.exports = Router;
