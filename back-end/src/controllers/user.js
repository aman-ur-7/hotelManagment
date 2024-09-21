const USER_DB = require("../model/userSchema");
const CLIENT_DB = require("../model/clientSchema");
const asyncHandler = require("express-async-handler");

const REGISTER_USER = asyncHandler(async (req, res) => {
  try {
    const { name, email, age, address, password } = req.body;
    if (name && email && age && address && password) {
      const IS_USER_EXIST = await USER_DB.findOne({ email });
      if (IS_USER_EXIST) {
        res.status(400).send(`user exist with ${email} , use onother`);
      } else {
        const USER_REGISTER = USER_DB.create({
          name,
          email,
          age,
          address,
          password,
        });

        if (USER_REGISTER) {
          res.status(200).send(USER_REGISTER);
        }
      }
    } else {
      res.status(400).send("Fill the all fields");
    }
  } catch (error) {
    console.error(error);
    throw new error();
  }
});

const READ_USER = asyncHandler(async (req, res) => {
  try {
    const { password, email } = req.body;
    if (password && email) {
      const IS_USER_EXIST = await USER_DB.findOne({ email, password });
      if (IS_USER_EXIST) {
        res.status(200).send(IS_USER_EXIST);
      } else {
        res.send("use the correct password");
      }
    } else {
      res.send("Enter all the fields");
    }
  } catch (error) {
    console.error(error);
  }
});

const GET_IMAGE = asyncHandler(async (req, res) => {
  try {
    const RESPONSE = await CLIENT_DB.find();
    if (RESPONSE) {
      res.send(RESPONSE);
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = { REGISTER_USER, READ_USER, GET_IMAGE };
