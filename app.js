const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (like CSS, JS)
app.use(express.static('views'));

// Parse form data (optional)
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'signin.html'));
});

app.post('/dashboard', (req, res) => {
  // You can process form data here using req.body if needed
  res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
