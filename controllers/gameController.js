const Word = require("../models/Word");
const Score = require("../models/Score");

// Start Game - Return a random word
const startGame = async (req, res) => {
  const word = await Word.aggregate([{ $sample: { size: 1 } }]);
  res.json({ startWord: word[0].word });
};

// Validate Word
const validateWord = async (req, res) => {
  const { currentWord, userWord, player } = req.body;

  // Check if word starts with the correct letter
  if (userWord[0].toLowerCase() !== currentWord.slice(-1).toLowerCase()) {
    return res.status(400).json({ message: "Word does not start with the correct letter!" });
  }

  // Check if word exists in DB
  const validWord = await Word.findOne({ word: userWord.toLowerCase() });
  if (!validWord) {
    return res.status(400).json({ message: "Invalid word!" });
  }

  // Update Score
  let score = await Score.findOne({ player });
  if (!score) {
    score = new Score({ player, score: 0 });
  }
  score.score += userWord.length; // Longer words get more points
  await score.save();

  res.json({ message: "Valid word!", nextWord: userWord, score: score.score });
};

// Get Leaderboard
const getLeaderboard = async (req, res) => {
  const leaderboard = await Score.find().sort({ score: -1 }).limit(5);
  res.json(leaderboard);
};

module.exports = { startGame, validateWord, getLeaderboard };
