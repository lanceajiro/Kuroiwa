const express = require('express');
const path = require('path');
const { sys } = require('./logs.js');

const app = express();
const PORT = global.config.port;

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Basic error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
    sys(`Server is running on http://localhost:${PORT}`);
});
