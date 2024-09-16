const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  image: String,
});

const Product = mongoose.model("Product", clientSchema);

module.exports = Product;
