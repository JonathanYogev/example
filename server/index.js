const express = require('express');
const app = express();
const port = 3001;

// The single API endpoint
app.get('/api/data', (req, res) => {
  res.json({ 
    message: 'Hello from the server!',
    timestamp: Date.now()
  });
});

// Liveness and Readiness probes
app.get('/health/live', (req, res) => {
    res.status(200).send('OK');
});

app.get('/health/ready', (req, res) => {
    // In a real app, you might check database connections here
    res.status(200).send('OK');
});

const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

module.exports = { app, server }; // Export for testing
