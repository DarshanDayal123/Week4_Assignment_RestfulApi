// server.js
const express = require('express');
const connectDB = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());  // To parse JSON bodies

// Routes
app.use('/api', taskRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
