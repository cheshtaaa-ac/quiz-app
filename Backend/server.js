const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// File path for storage
const filePath = path.join(__dirname, 'results.json');

// Load existing results
let results = [];
if (fs.existsSync(filePath)) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    results = JSON.parse(data);
  } catch (err) {
    console.error('Error reading results.json:', err);
    results = [];
  }
}

// 🟢 Root route (for testing server)
app.get('/', (req, res) => {
  res.send('Quiz Backend is running 🚀');
});

// 🟢 SAVE RESULT API
app.post('/save-result', (req, res) => {
  try {
    const { username, topic, score, total } = req.body;

    // Basic validation
    if (!username || !topic || score == null || total == null) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const newResult = {
      id: results.length + 1,
      username,
      topic,
      score,
      total,
      percentage: ((score / total) * 100).toFixed(2),
      date: new Date().toISOString()
    };

    results.push(newResult);

    // Save to file
    fs.writeFileSync(filePath, JSON.stringify(results, null, 2));

    res.status(200).json({
      message: 'Result saved successfully ✅',
      data: newResult
    });

  } catch (error) {
    console.error('Error saving result:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 🟢 GET ALL RESULTS (Leaderboard)
app.get('/results', (req, res) => {
  try {
    // Sort by highest score
    const sorted = [...results].sort((a, b) => b.score - a.score);
    res.json(sorted);
  } catch (error) {
    console.error('Error fetching results:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 🟢 CLEAR RESULTS (optional - for testing)
app.delete('/results', (req, res) => {
  try {
    results = [];
    fs.writeFileSync(filePath, JSON.stringify(results, null, 2));
    res.json({ message: 'All results cleared 🧹' });
  } catch (error) {
    res.status(500).json({ error: 'Error clearing results' });
  }
});

// 🚀 Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
