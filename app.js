const express = require('express');
const app = express();
require("dotenv").config()
const port = process.env.PORT || 3000;
const methodOverride = require('method-override');
const gameRoutes = require('./routes/gameRoutes');
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/game-library');
const mongoURI = process.env.MONGOURI;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/games', gameRoutes);

async function connectToMongo() {
  try {
    await mongoose.connect(mongoURI);
    console.log('The connection with MongoDB is established');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToMongo();

app.listen(port, () => {
  console.log('Server started on port:', port);
});

module.exports = app;