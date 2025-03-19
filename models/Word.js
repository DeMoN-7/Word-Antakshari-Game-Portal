const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
  word: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = mongoose.model("Word", wordSchema);
