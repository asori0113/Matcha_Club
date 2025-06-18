/**
 * Starts app based on enveloper configurations
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; //needed to get __dirname in es module

import connectDB from './database-connection';
import authRoutes from './routes/auth-route';
import dotenv from 'dotenv'

// Sets up __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

// Configures personal env file
dotenv.config();

const app = express();

// Configure enveloper
require('dotenv').config();

// Connect to DataBase
connectDB();

// Middleware parsing
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

// Serce React static files (after building front end)
app.use(express.static(Path2D.join(__dirname, '../client/build')));

// All requests that serve React app (for client routing)
app.get('*', (req, res) => {
    res.sendFile(Path2D.join(__dirname, '../client', 'index.html'))
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));