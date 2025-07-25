// Import the Express framework for building web applications
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a GET endpoint '/health' to check server status
app.get('/health', (req, res) => {
  // Respond with HTTP 200 and a JSON object indicating server is healthy
  res.status(200).json({ status: 'ok' });
});

// Set the port for the server to listen on, defaulting to 3000 if not specified in environment
const PORT = process.env.PORT || 3000;

// Start the server only if this file is run directly (not imported by tests)
if (require.main === module) {
  app.listen(PORT, () => console.log(`Running on port ${PORT}`));
}

// Export the Express app instance for use in other modules (e.g., testing)
module.exports = app;
