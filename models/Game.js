const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: String,
  developer: String,
  genre: String,
  description: String
});

module.exports = mongoose.model('Game', gameSchema);