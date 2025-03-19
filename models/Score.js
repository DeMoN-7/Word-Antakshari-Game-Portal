const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  player: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Score", scoreSchema);
