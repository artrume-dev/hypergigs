const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Handle SPA routing - serve index.html for any non-file requests
app.get('*', (req, res) => {
  // If the request is for a specific HTML file, serve it
  if (req.path.endsWith('.html')) {
    res.sendFile(path.join(__dirname, req.path));
  } else if (req.path === '/') {
    // Serve index.html for root path
    res.sendFile(path.join(__dirname, 'index.html'));
  } else {
    // For other paths, try to serve the file or fallback to index.html
    res.sendFile(path.join(__dirname, 'index.html'));
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit: http://localhost:${PORT}`);
});