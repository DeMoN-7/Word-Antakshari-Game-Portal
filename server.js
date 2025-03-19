const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import CORS

const gameRoutes = require("./routes/gameRoutes");

const app = express();

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/antakshari")
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

// API Routes
app.use("/api/game", gameRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
