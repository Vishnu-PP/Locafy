
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Basic route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));