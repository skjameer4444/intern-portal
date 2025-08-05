const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

const data = JSON.parse(fs.readFileSync("data.json"));

// API to get intern data
app.get("/api/intern", (req, res) => {
  res.json(data);
});

// API to get leaderboard
app.get("/api/leaderboard", (req, res) => {
  res.json(data.leaderboard);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
