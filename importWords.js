const mongoose = require("mongoose");
const fs = require("fs");
const Word = require("./models/Word");

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/antakshari")
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

// Read words from file
const words = fs.readFileSync("./data/words_alpha.txt", "utf-8").split("\n");

// Import words to MongoDB
const importWords = async () => {
  try {
    const wordList = words
      .map((word) => word.trim()) // Remove extra spaces
      .filter((word) => word.length > 0); // Filter out empty words

    if (wordList.length === 0) {
      console.log("No valid words found in the file.");
      process.exit(1);
    }

    // Insert words into MongoDB
    await Word.insertMany(wordList.map((word) => ({ word })));
    console.log(`${wordList.length} words imported successfully!`);
    process.exit();
  } catch (err) {
    console.error("Error importing words:", err);
    process.exit(1);
  }
};

importWords();
