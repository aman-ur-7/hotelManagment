const express = require("express");
const Router = express.Router();
const multer = require("multer");
const path = require("path");
const CLIENT_DB = require("../model/clientSchema");
const { REGISTER_USER, READ_USER } = require("../controllers/user");

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../upload")); // Adjust path as needed
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Ensure unique file names
  },
});
const upload = multer({ storage: storage });

// Routes
Router.post("/create", REGISTER_USER);
Router.post("/read", READ_USER);

Router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    console.log(
      req.file,
      req.file,
      req.body.name,
      req.body.company,
      req.body.email,
      req.body.number,
      req.body.city
    );

    if (
      !req.file ||
      !req.body.name ||
      !req.body.company ||
      !req.body.email ||
      !req.body.number ||
      !req.body.city
    ) {
      return res.status(400).send("Missing required fields.");
    }

    const upload = await CLIENT_DB.create({
      image: req.file.filename,
      name: req.body.name,
      company: req.body.company,
      email: req.body.email,
      number: req.body.number,
      city: req.body.city,
    });

    if (upload) {
      res.send("Upload successful.");
    } else {
      res.status(500).send("Error saving data.");
    }
  } catch (error) {
    console.error(error);

    res.status(500).send("Server error: " + error.message);
  }
});

module.exports = Router;
