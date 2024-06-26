const Game = require('../models/Game');

exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.render('index', { games });
  } catch (err) {
    res.status(500).send('Error retrieving games: ' + err.message);
  }
};

exports.getGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).send('Game not found');
    }
    res.render('show', { game });
  } catch (err) {
    res.status(500).send('Error retrieving game: ' + err.message);
  }
};

exports.displayNewGameForm = (req, res) => {
  res.render('new');
};

exports.createGame = async (req, res) => {
  try {
    const newGame = new Game(req.body);
    await newGame.save();
    res.redirect('/games');
  } catch (err) {
    res.status(500).send('Error creating game: ' + err.message);
  }
};

exports.displayEditGameForm = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).send('Game not found');
    }
    res.render('edit', { game });
  } catch (err) {
    res.status(500).send('Error finding game: ' + err.message);
  }
};

exports.updateGame = async (req, res) => {
  try {
    await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect('/games');
  } catch (err) {
    res.status(500).send('Error updating game: ' + err.message);
  }
};

exports.deleteGame = async (req, res) => {
  try {
    await Game.findByIdAndDelete(req.params.id);
    res.redirect('/games');
  } catch (err) {
    res.status(500).send('Error deleting game: ' + err.message);
  }
};
