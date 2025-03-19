
### 📄 **README.md**
```markdown
# 🎮 Word Antakshari Game Portal

A fun and interactive word game where players take turns entering words that start with the last letter of the previous word.

---

## 🚀 Features
- 🎲 Start the game with a random word.
- ✅ Automatically validate words.
- 🏆 Leaderboard to track player scores.
- 🌐 Backend using Express and MongoDB.
- 🎨 Simple and responsive frontend.

---

## ⚡️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/DeMoN-7/Word-Antakshari-Game-Portal.git
cd Word-Antakshari-Game-Portal
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start MongoDB
Ensure MongoDB is running locally at:
```
mongodb://localhost:27017/antakshari
```

### 4. Import Words into Database
```bash
node importWords.js
```

### 5. Start Backend Server
```bash
node server.js
```
The server will be available at:
```
http://localhost:5000
```

---

## 🎨 Frontend Setup
- Open `frontend/index.html` in **VS Code**.
- Right-click and select **Open with Live Server**.
- Access the game at:
```
http://127.0.0.1:5500/frontend/index.html
```

---

## 🛠️ API Endpoints
- 🎲 `GET /api/game/start` – Start the game.
- ✅ `POST /api/game/validate` – Validate entered word.
- 🏆 `GET /api/game/leaderboard` – Get leaderboard data.

---

## 🎯 How to Play
1. Click **Start Game** to get a random word.
2. Enter a word starting with the last letter of the previous word.
3. Click **Submit** to validate.
4. Track your score on the **Leaderboard**.

---

## 🐞 Troubleshooting
- **CORS Error?** Add this to `server.js`:
```javascript
const cors = require("cors");
app.use(cors());
```
- **Port Already in Use?**
```bash
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

---

## 📜 License
This project is licensed under the MIT License.

---

## 🤝 Contributing
Feel free to fork and create pull requests!

---


### ✅ **Git Push Instructions**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/Word-Antakshari-Game-Portal.git
git push -u origin main
```

---
