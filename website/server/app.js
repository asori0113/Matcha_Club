/**
 * Starts app based on enveloper configurations
 */

const express = require('express');
const app = express();
const connectDB = require('./database-connection')
const authRoutes = require('./routes/auth-route');

// Configure enveloper
require('dotenv').config();

// Connect to DataBase
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));