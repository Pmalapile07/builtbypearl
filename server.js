const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything in this folder (index.html, css, images, etc.)
app.use(express.static(__dirname));

// Fallback: always send index.html for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// This is where you'll add backend routes later, e.g.:
// app.post('/api/enquiry', (req, res) => { ... });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
