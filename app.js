require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('../routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});