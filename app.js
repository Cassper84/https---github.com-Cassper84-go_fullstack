// MONDODB PASSWORD: Ogg7Kn6cNP332zgl
// MONGODB CONNECTION: mongodb+srv://onopeter121:<password>@cluster0.cyrs7vn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require('express');
const mongoose = require('mongoose');
const stuffRouter = require('./routes/stuff');
const userRouter = require('./routes/user');
const path = require('path');
const app = express();

// Connect to MongoDB Atlas using the provided connection string
mongoose.connect('mongodb+srv://onopeter121:Ogg7Kn6cNP332zgl@cluster0.cyrs7vn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

// Middleware to parse JSON bodies in incoming requests
app.use(express.json());

// Middleware to set headers for CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); 
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/stuff', stuffRouter);
app.use('/api/auth', userRouter);

module.exports = app; 
