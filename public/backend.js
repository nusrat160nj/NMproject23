const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

// Create an SQLite database
const db = new sqlite3.Database(':memory:'); // Use in-memory database for simplicity

// Create a table to store your data
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS your_data (id INTEGER PRIMARY KEY, some_field TEXT)");
});

// Serve your HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/your-html-file.html');
});

// Handle API requests
app.get('/api/your_data', (req, res) => {
  db.all("SELECT * FROM your_data", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred." });
    } else {
      res.json(rows);
    }
  });
});

// Handle other CRUD operations (Create, Update, Delete) as needed

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
