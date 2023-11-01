const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

// Create a SQLite database
const db = new sqlite3.Database(':memory:'); // Use in-memory database for simplicity

// Create an iPhones table
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS iPhones (id INTEGER PRIMARY KEY, name TEXT, image TEXT, price INTEGER)");

  // Insert initial iPhone data
  const initialData = [
    { name: "Iphone 14", image: "iphone14.jpg", price: 86699 },
    { name: "Iphone 14 Pro Max", image: "iphone14promax.jpg", price: 97999 },
    // Add more iPhone data here
  ];

  const insertStmt = db.prepare("INSERT INTO iPhones (name, image, price) VALUES (?, ?, ?)");
  initialData.forEach(data => {
    insertStmt.run(data.name, data.image, data.price);
  });
  insertStmt.finalize();
});

// Get a list of iPhones
app.get('/api/iphones', (req, res) => {
  db.all("SELECT * FROM iPhones", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred." });
    } else {
      res.json(rows);
    }
  });
});

// Handle other CRUD operations as needed (e.g., Create, Update, Delete)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
