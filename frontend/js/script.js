const apiUrl = "http://localhost:5000/api/game";

let currentWord = "";

// Start Game - Get a random starting word
async function startGame() {
  try {
    const response = await fetch(`${apiUrl}/start`);
    const data = await response.json();
    currentWord = data.startWord;
    document.getElementById("startWord").innerText = `Start Word: ${currentWord}`;
    document.getElementById("status").innerText = "";
  } catch (error) {
    console.error("Error starting game:", error);
    document.getElementById("status").innerText = "Error starting game!";
  }
}

// Validate User Word
async function validateWord() {
  const userWord = document.getElementById("userWord").value.trim().toLowerCase();
  if (!userWord) {
    document.getElementById("status").innerText = "Please enter a word!";
    return;
  }

  try {
    const response = await fetch(`${apiUrl}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentWord, userWord, player: "Player 1" }),
    });

    const data = await response.json();
    if (response.ok) {
      currentWord = data.nextWord;
      document.getElementById("startWord").innerText = `Next Word: ${currentWord}`;
      document.getElementById("status").innerText = "✅ Valid word!";
      loadLeaderboard(); // Update leaderboard after a valid word
    } else {
      document.getElementById("status").innerText = `❌ ${data.message}`;
    }
  } catch (error) {
    console.error("Error validating word:", error);
    document.getElementById("status").innerText = "Error validating word!";
  }
}

// Load Leaderboard
async function loadLeaderboard() {
  try {
    const response = await fetch(`${apiUrl}/leaderboard`);
    const data = await response.json();
    const leaderboard = document.getElementById("leaderboard");
    leaderboard.innerHTML = "";
    data.forEach((item) => {
      leaderboard.innerHTML += `<li>${item.player}: ${item.score} points</li>`;
    });
  } catch (error) {
    console.error("Error loading leaderboard:", error);
  }
}

// Load leaderboard on page load
document.addEventListener("DOMContentLoaded", loadLeaderboard);
