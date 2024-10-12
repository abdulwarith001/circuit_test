const express = require('express');
const app = express();

// Simulate a normal response (200 OK)
app.get('/success', (req, res) => {
  res.status(200).json({ message: 'Success', status: 200 });
});

// Simulate a server error (500 Internal Server Error)
app.get('/error', (req, res) => {
  res.status(500).json({ message: 'Internal Server Error', status: 500 });
});

// Simulate a delayed response (Timeout simulation)
app.get('/timeout', (req, res) => {
  setTimeout(() => {
    res.status(200).json({ message: 'Delayed Success', status: 200 });
  }, 10000); // 10-second delay
});

// Simulate a 404 Not Found
app.get('/not-found', (req, res) => {
  res.status(404).json({ message: 'Not Found', status: 404 });
});

// Simulate an unauthorized access (401 Unauthorized)
app.get('/unauthorized', (req, res) => {
  res.status(401).json({ message: 'Unauthorized', status: 401 });
});

// Simulate a random failure (200 or 500 randomly)
app.get('/random', (req, res) => {
  const randomStatus = Math.random() > 0.5 ? 200 : 500;
  res.status(randomStatus).json({
    message: randomStatus === 200 ? 'Success' : 'Random Failure',
    status: randomStatus,
  });
});

// Start the test server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
});
