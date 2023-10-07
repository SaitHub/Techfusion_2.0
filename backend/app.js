const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const router = require('./controller/authRoute');
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Enable All CORS Requests
app.use(cors({
  origin: process.env.CORS_URL, // Allow requests from this origin
  credentials: true,
}));
app.use('/user',router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});