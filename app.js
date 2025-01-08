// Import the express module
const express = require('express');
const app = express();

// Define a port number
const PORT = process.env.PORT|| 3000;

// Route 1: Responds with "Maruti"
app.get('/maruti', (req, res) => {
  res.send('Maruti');
});

// Route 2: Responds with "Toyota"
app.get('/toyota', (req, res) => {
  res.send('Toyota');
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
