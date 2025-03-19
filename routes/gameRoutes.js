const express = require("express");
const { startGame, validateWord, getLeaderboard } = require("../controllers/gameController");
const router = express.Router();

router.get("/start", startGame);
router.post("/validate", validateWord);
router.get("/leaderboard", getLeaderboard);

module.exports = router;
